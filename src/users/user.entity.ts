import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryColumn()
  id: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'lname', nullable: true })
  lname: string;

  @Column({ name: 'fname', nullable: true })
  fname: string;

  @Column({ name: 'email' })
  email: string;
}
