import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Plans {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    service_id: number;

    @Column()
    offer: string;

    @Column()
    value: number;

    @Column()
    created_at: Date;

    @Column()
    deleted_at: Date;

    @Column()
    modified_at: Date;
}
