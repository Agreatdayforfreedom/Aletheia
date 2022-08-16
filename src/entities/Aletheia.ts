import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Aletheia {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	content!: string;
}
