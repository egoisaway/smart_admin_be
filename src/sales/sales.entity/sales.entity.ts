import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sales {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    client_id: number;

    @Column()
    person_id: number;

    @Column()
    vtc_lines: number;

    @Column()
    vtc_devices: number;

    @Column()
    vtc_broadbands: number;

    @Column()
    observation: string;

    @Column()
    created_at: Date;

    @Column()
    deleted_at: Date;

    @Column()
    modified_at: Date;
}
