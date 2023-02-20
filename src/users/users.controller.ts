import { Controller, Get, Post, Body, Delete, HttpCode, HttpStatus, Put, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { HidePwdInterceptor } from './users.interceptor';
import { Uuid } from '../common/uuid.decorator';
import { NotFoundInterceptor } from '../common/not-found.interceptor';

@Controller('user')
@UseInterceptors(HidePwdInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @UseInterceptors(NotFoundInterceptor)
  findOne(@Uuid() id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  @UseInterceptors(NotFoundInterceptor)
  update(@Uuid() id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @UseInterceptors(NotFoundInterceptor)
  remove(@Uuid() id: string) {
    return this.usersService.remove(id);
  }
}
