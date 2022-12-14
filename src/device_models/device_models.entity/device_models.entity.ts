import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DeviceModels {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    brand_id: number;

    @Column()
    name: string;

    @Column()
    created_at: Date;

    @Column()
    deleted_at: Date;

    @Column()
    modified_at: Date;
}
