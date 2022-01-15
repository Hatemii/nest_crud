import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'Get All Teachers';
  }

  @Get('/:teacherId')
  getTeacherById() {
    return 'Get Teacher By Id';
  }

  @Post()
  createTeacher() {
    return 'Post Teacher';
  }

  @Put('/:teacherId')
  updateTeacher() {
    return 'Update Teacher By Id';
  }
}
