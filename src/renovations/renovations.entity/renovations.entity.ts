import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Renovations {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    line_id: number;

    @Column()
    sale_id: number;

    @Column()
    created_at: Date;

    @Column()
    deleted_at: Date;

    @Column()
    modified_at: Date;
}
