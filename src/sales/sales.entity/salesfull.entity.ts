import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SalesFull {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    client_cnpj: string;

    @Column()
    client_name: string;

    @Column()
    person_name:string;

    @Column()
    vtc_lines: number;

    @Column()
    vtc_devices: number;

    @Column()
    vtc_broadbands: number;

    @Column()
    created_at: Date;
}
