import { Controller, Get, Post, Body, Param, Delete, HttpCode, HttpStatus, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const created = this.usersService.create(createUserDto);
    return this.hidePwd(created);
  }

  @Get()
  findAll() {
    return this.usersService.findAll().map((i) => this.hidePwd(i));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const user = this.usersService.findOne(id);
    return this.hidePwd(user);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const updated = this.usersService.update(id, updateUserDto);
    return this.hidePwd(updated);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  private hidePwd(user: User): Omit<User, 'password'> {
    const { password: _, ...usr } = user;
    return usr;
  }
}
