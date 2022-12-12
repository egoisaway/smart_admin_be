import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Statuses {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    created_at: Date;

    @Column()
    deleted_at: Date;

    @Column()
    modified_at: Date;
}