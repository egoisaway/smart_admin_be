import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Renovations {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    client_id: number;

    @Column()
    quantity: number;

    @Column()
    created_at: Date;

    @Column()
    deleted_at: Date;

    @Column()
    modified_at: Date;
}
