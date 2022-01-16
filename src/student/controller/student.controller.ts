import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import {
  StudentsResponseDto,
  CreateStudentDto,
  UpdateStudentDto,
} from '../dto/student.dto';
import { StudentService } from '../service/student.service';

@Controller('students')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get()
  getStudents(): StudentsResponseDto[] {
    return this.studentService.getStudents();
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string) {
    return this.studentService.getStudentById(studentId);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto) {
    return this.studentService.createStudent(body);
  }

  @Put('/:studentId')
  updateStudentObject(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ) {
    return this.studentService.updateStudent(studentId, body);
  }
}
