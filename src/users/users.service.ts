import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: Array<User> = [];
  private id = 0;

  create(createUserDto: CreateUserDto) {
    this.users.push({ id: ++this.id, ...createUserDto, createdAt: new Date() });
  }

  findAll() {
    return [...this.users];
  }

  findOne(id: number) {
    const found = this.users.find( (u) => u.id === id );
    if(!found) throw new NotFoundException();
    return found;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
