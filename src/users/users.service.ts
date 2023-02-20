import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  async update(id: string, { oldPassword, newPassword }: UpdateUserDto) {
    const { password, version } = await this.usersRepository.findOneBy({ id });

    if (password !== oldPassword) {
      throw new HttpException('Invalid old password', HttpStatus.FORBIDDEN);
    }

    await this.usersRepository.update(id, { password: newPassword, version: version + 1 });

    return this.usersRepository.findOneBy({ id });
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: string) {
    return this.usersRepository.findOneBy({ id });
  }

  remove(id: string) {
    return this.usersRepository.delete(id);
  }
}
