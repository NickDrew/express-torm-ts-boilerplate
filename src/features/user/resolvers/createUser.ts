import { getCustomRepository } from 'typeorm';
import { Users } from '../repository';

export default async function createUser(email: string, password: string): Promise<void> {
    const userRepo = getCustomRepository(Users);
    await userRepo.createAndSave(email, password);
}
