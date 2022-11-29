import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cities {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    state_id: number;
    
    @Column()
    name: string;
    
    @Column({type:'date'})
    created_at: string;

    @Column({type:'date'})
    deleted_at: string;

    @Column({type:'date'})
    modified_at: string;
}
