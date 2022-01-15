import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'Get All Students';
  }

  @Get('/:studentId')
  getStudentById() {
    return 'Get Student By Id';
  }

  @Post()
  createStudent() {
    return 'Post Student';
  }

  @Put('/:studentId')
  updateStudent() {
    return 'Update Student By Id';
  }
}
