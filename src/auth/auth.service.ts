import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/user/entity/user.entity';
import { UserService } from 'src/user/service/user.service';

@Injectable()
export class AuthService {
  @Inject(UserService)
  private readonly userService: UserService;

  async validateUser(username: string, password: string): Promise<any> {
    const findUser = await this.userService.getOneUser(null, username);

    if (findUser && findUser.password == password) {
      return findUser;
    }

    return 'username or password is incorrect';
  }
}
