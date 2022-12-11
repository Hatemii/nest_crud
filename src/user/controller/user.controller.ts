import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { UserEntity } from '../entity/user.entity';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {
  @Inject(UserService)
  private readonly userService: UserService;

  @Get()
  async getAllUsers(): Promise<UserEntity[]> {
    return this.userService.getAllUsers();
  }

  @Get('/:id')
  async getOneUser(@Param('id') id: number): Promise<UserEntity> {
    return this.userService.getOneUser(id);
  }

  @Post()
  async createUser(@Body() data: UserEntity) {
    return this.userService.createUser(data);
  }
}
