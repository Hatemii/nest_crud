import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudentTeacher() {
    return 'Get Teacher Students';
  }

  @Put('/:studentId')
  updateStudentTeacher() {
    return 'Update Student Teacher By Id';
  }
}
