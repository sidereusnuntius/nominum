import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("names")
export class Name {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;
}

