import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { CreateStudentDto, UpdateStudentDto } from './dto/student.dto';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'Get All Students';
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string) {
    return `Get Student By Id ${studentId}`;
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto) {
    return `Student ${body} created`;
  }

  // second example without calling DTO class
  // @Post()
  // CreateStudent(@Body() body: { name: string; email: string }) {
  //   return `Student ${body} created`;
  // }

  @Put('/:studentId')
  updateStudentObject(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ) {
    return `Student with id ${studentId} and data ${body} updated successfully`;
  }

  @Put('/column/:studentId')
  updateStudentColumn(
    @Param('studentId') studentId: string,
    @Body('name') name: string,
  ) {
    return `Student with id ${studentId} and data ${name} updated successfully`;
  }
}
