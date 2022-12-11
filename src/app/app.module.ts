import { Module } from '@nestjs/common';
import { StudentController } from '../student/controller/student.controller';
import { StudentService } from 'src/student/service/student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from 'src/student/model/student.entity';
import { StudentModule } from 'src/student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [StudentEntity],
      synchronize: true,
    }),
    StudentModule,
  ],
})
export class AppModule {}
