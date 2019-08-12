import { EntityRepository, Repository } from 'typeorm';
import { User } from './entities';
import * as bcrypt from 'bcryptjs';
import { v4 as uuid } from 'uuid';

@EntityRepository(User)
export class Users extends Repository<User> {
    public async createAndSave(email: string, password: string): Promise<boolean> {
        const user = new User();
        user.email = email;
        user.password = await this.generatePasswordHash(password);
        user.id = this.generateID();
        await this.manager.save(user);
        return true;
    }

    private generateID(): string {
        return uuid() as string;
    }

    private async generatePasswordHash(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }
}
