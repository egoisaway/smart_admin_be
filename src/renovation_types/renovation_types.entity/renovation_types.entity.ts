import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RenovationTypes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    acronym: string;

    @Column()
    value: number;

    @Column({type:'date'})
    created_at: string;

    @Column({type:'date'})
    deleted_at: string;

    @Column({type:'date'})
    modified_at: string;
}
