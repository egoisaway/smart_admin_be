import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RenovationTypes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    acronym: string;

    @Column()
    value: number;

    @Column()
    created_at: Date;

    @Column()
    deleted_at: Date;

    @Column()
    modified_at: Date;
}
