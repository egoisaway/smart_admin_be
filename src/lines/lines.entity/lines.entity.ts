import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lines {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    line_type_id: number;

    @Column()
    plan_id: number;

    @Column()
    sale_id: number;

    @Column()
    number: number;

    @Column()
    iccid: number;

    @Column()
    created_at: Date;

    @Column()
    deleted_at: Date;

    @Column()
    modified_at: Date;
}
