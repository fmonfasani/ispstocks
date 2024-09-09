import { Role } from '../roles/roles.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user', schema: 'auth' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  createdAt: string;
  @ManyToMany(() => Role, (role) => role.users)
  roles: Role[];
}
