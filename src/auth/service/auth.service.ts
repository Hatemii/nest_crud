import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/service/user.service';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class AuthService extends PassportStrategy(Strategy) {
  @Inject(UserService)
  private readonly userService: UserService;

  async validateUser(username: string, password: string): Promise<any> {
    const findUser = await this.userService.getOneUser(null, username);

    if (findUser && findUser.password == password) {
      return findUser;
    }

    return null;
  }
}
