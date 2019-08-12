import { getCustomRepository } from 'typeorm';
import { Users } from '../repository';
import { User } from '../entities';

export default async function createUser(): Promise<User[]> {
    const userRepo = getCustomRepository(Users);
    return await userRepo.find();
}
