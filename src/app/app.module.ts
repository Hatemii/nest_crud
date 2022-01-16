import { Module } from '@nestjs/common';
import { StudentController } from '../student/controller/student.controller';
import { StudentService } from 'src/student/service/student.service';

@Module({
  imports: [],
  controllers: [StudentController],
  providers: [StudentService],
})
export class AppModule {}
