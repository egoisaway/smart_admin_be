import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PlatformsAccessFull {
    @PrimaryGeneratedColumn()
    id: number;

    
    @Column()
    client_id: number;
    
    @Column()
    login: string;
    
    @Column()
    password: string;
    
    @Column()
    platform_name: number;

    @Column()
    created_at: Date;
}
