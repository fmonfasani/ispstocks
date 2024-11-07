import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UsersRepository {
  private users = [
    {
      id: 1,
      username: 'FedeM',
      email: 'fedem@gmail.com',
    },
    {
      id: 2,
      username: 'leo',
      email: 'leo@gmail.com',
    },
    { id: 3, username: 'luis', email: 'luis@gmail.com' },
  ];
  async getAllUsers() {
    return this.users;
  }
  async getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
  async getUserByName(username: string) {
    return this.users.find((user) => user.username === username);
  }
  async createUser(user: Omit<User, 'id'>): Promise<User> {
    const id = this.users.length + 1;
    const newUser: User = { id, ...user };
    this.users = [...this.users, newUser]; // Aquí usamos el spread operator correctamente
    return newUser;
  }
}
