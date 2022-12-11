import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { db_service } from 'src/database.service';
import { StudentModule } from 'src/student/student.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(db_service), StudentModule, UserModule],
})
export class AppModule {}
