import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contacts {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    person_id: number;

    @Column()
    contact_type_id: number;

    @Column()
    contact: string;

    @Column()
    created_at: Date;

    @Column()
    deleted_at: Date;

    @Column()
    modified_at: Date;
}
