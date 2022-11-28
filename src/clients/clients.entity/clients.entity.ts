import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Clients {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    cnpj: number;
    
    @Column()
    name: string;
    
    @Column()
    state_id: number;

    @Column()
    city_id: number;

    @Column()
    renovation_type_id: number;

    @Column()
    created_at: Date;

    @Column()
    deleted_at: Date;

    @Column()
    modified_at: Date;
}
