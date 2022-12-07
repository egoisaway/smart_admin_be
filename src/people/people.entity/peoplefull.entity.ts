import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PeopleFull {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    client_id: number;

    @Column()
    client_name: string;

    @Column()
    client_cnpj: number;

    @Column()
    name: string;
    
    @Column()
    cpf: number;

    @Column()
    job: number;

    @Column()
    job_name: string;

    @Column()
    created_at: Date;
}
