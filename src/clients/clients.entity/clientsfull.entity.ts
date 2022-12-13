import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ClientsFull {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    cnpj: string;
    
    @Column()
    name: string;
    
    @Column()
    state: string;

    @Column()
    city: string;

    @Column()
    renovation_type: string;

    @Column()
    can_renovate: string;

    @Column()
    remaining_to_renovate: string;

    @Column()
    will_renovate: string;
}
