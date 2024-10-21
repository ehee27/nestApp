import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 0, name: 'Scott Lucas', role: 'PLAYER', email: 'scott@email.com' },
    { id: 1, name: 'Steven Lucas', role: 'PLAYER', email: 'steven@email.com' },
    { id: 2, name: 'Chris Nicholas', role: 'PLAYER', email: 'chris@email.com' },
  ];

  // --------------- FIND ALL ---------------------
  findAll(role?: 'PLAYER' | 'COACH') {
    if (role) {
      const rolesArray = this.users.filter((user) => user.role === role);
      if (rolesArray.length === 0)
        throw new NotFoundException('User Role not found');
      return rolesArray;
    }

    return this.users;
  }

  // --------------- FIND ONE ---------------------
  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) throw new NotFoundException(`No user found with id:${id}`);
    return user;
  }

  // --------------- CREATE USER ---------------------
  createUser(createUserDto: CreateUserDto) {
    const newUser = {
      ...createUserDto,
      id: Date.now(),
    };
    this.users.push(newUser);

    return newUser;
  }

  // ---------------UPDATE USER ---------------------
  updateUser(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });
    return this.findOne(id);
  }

  // --------------- DELETE USER ---------------------
  removeUser(id: number) {
    const toBeRemoved = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return toBeRemoved;
  }
}
