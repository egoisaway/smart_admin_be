import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class People {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    client_id: number;

    @Column()
    cpf: number;

    @Column()
    name: string;

    @Column()
    created_at: Date;

    @Column()
    deleted_at: Date;

    @Column()
    modified_at: Date;
}
