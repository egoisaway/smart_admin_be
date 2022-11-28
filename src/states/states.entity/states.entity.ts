import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class States {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    acronym: string;

    @Column()
    name: string;

    @Column()
    created_at: Date;

    @Column()
    deleted_at: Date;

    @Column()
    modified_at: Date;
}
