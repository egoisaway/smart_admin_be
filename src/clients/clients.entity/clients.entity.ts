import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Clients {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    cnpj: string;
    
    @Column()
    name: string;
    
    @Column()
    state_id: number;

    @Column()
    city_id: number;

    @Column()
    renovation_type_id: number;

    @Column({type:'date'})
    created_at: string;

    @Column({type:'date'})
    deleted_at: string;

    @Column({type:'date'})
    modified_at: string;
}
