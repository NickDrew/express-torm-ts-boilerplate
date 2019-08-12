import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryColumn('uuid') public id?: string;

    @Column('varchar', { length: 255 }) public email?: string;

    @Column('text') public password?: string;
}
