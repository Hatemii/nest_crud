import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { CreateTeacherDto, UpdateTeacherDto } from './dto/teacher.dto';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'Get All Teachers';
  }

  @Get('/:teacherId')
  getTeacherById(@Param('teacherId') teacherId: string) {
    return `Get Teacher By Id ${teacherId}`;
  }

  @Post()
  createTeacher(@Body() body: CreateTeacherDto) {
    return `Teacher ${body} created successfully`;
  }

  @Put('/:teacherId')
  updateTeacher(
    @Param('teacherId') teacherId: string,
    @Body() body: UpdateTeacherDto,
  ) {
    return `Teacher with id ${teacherId} and data ${body} updated successfully`;
  }

  @Put('/column/:teacherId')
  updateTeacherColumn(
    @Param('teacherId') teacherId: string,
    @Body('name') name: string,
  ) {
    return `Teacher with id ${teacherId} and data ${name} updated successfully`;
  }
}
