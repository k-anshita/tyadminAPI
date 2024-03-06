import { max } from "rxjs";
import { Role } from "src/role/role.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Role)
    @JoinColumn()
    role: Role

    @Column()
    cardName: string;

    @Column()
    cardNumber: string;

    @Column()
    expMonth: number;

    @Column()
    expYear: number;

    @Column()
    cvv: string;

    @Column({ default: true })
    isActive: boolean;

    @Column({ default: false })
    isDeleted: boolean;

    @Column()
    createdBy: number;

    @Column()
    createdDate: Date;

    @Column({ nullable: true })
    modifyBy: number;

    @Column({ nullable: true })
    modifyDate: Date;
}
