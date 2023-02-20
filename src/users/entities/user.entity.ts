import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar' })
  login: string;

  @Column({ nullable: false, type: 'varchar' })
  @Exclude()
  password: string;

  @VersionColumn()
  version = 1;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: number;
}
