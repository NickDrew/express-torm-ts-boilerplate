import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';

export default async function connectDatabase(): Promise<Connection> {
    return await createConnection('default');
}
