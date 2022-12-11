import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './local.strategy';
import { AuthService } from './service/auth.service';

@Module({
  imports: [UserModule, PassportModule],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
