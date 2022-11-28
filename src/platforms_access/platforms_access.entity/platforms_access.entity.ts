import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PlatformsAccess {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    platform_id: number;

    @Column()
    client_id: number;

    @Column()
    login: string;

    @Column()
    password: string;

    @Column()
    created_at: Date;

    @Column()
    deleted_at: Date;

    @Column()
    modified_at: Date;
}
