import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Devices {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    device_model_id: number;

    @Column()
    sale_id: number;

    @Column()
    created_at: Date;

    @Column()
    deleted_at: Date;

    @Column()
    modified_at: Date;
}
