// src/users/user.entity.ts
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  fname: string;

  @Column({ nullable: true })
  lname: string;

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt: Date;
}