import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class States {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    acronym: string;

    @Column()
    name: string;

    @Column({type:'date'})
    created_at: string;

    @Column({type:'date'})
    deleted_at: string;

    @Column({type:'date'})
    modified_at: string;
}
