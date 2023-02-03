import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EntityStore } from 'src/common/entity-store.class';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService extends EntityStore<User> {
  create(createUserDto: CreateUserDto) {
    const date = this.getTimestamp();
    const user = new User();
    return this.add({ ...user, ...createUserDto, createdAt: date, updatedAt: date });
  }

  update(id: string, { oldPassword, newPassword }: UpdateUserDto) {
    const { password, version } = this.findOne(id);

    if (password !== oldPassword) {
      throw new HttpException('Invalid old password', HttpStatus.FORBIDDEN);
    }

    const updatedAt = this.getTimestamp();

    return this.updateItem(id, { password: newPassword, updatedAt, version: version + 1 });
  }

  private getTimestamp(): number {
    return Date.now();
  }
}
