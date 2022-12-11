import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Inject,
  Delete,
} from '@nestjs/common';
import { StudentEntity } from '../model/student.entity';
import { StudentService } from '../service/student.service';

@Controller('students')
export class StudentController {
  @Inject(StudentService)
  private readonly studentService: StudentService;

  @Get()
  async getAllStudents(): Promise<StudentEntity[]> {
    return await this.studentService.getAllStudents();
  }

  @Get('/:id')
  async getOneStudent(@Param('id') id: number): Promise<StudentEntity> {
    return this.studentService.getOneStudent(id);
  }

  @Post()
  async createStudent(@Body() data: StudentEntity) {
    return await this.studentService.createStudent(data);
  }

  @Put('/:id')
  async updateStudent(@Param('id') id: number, @Body() data: StudentEntity) {
    return await this.studentService.updateStudent(id, data);
  }

  @Delete('/:id')
  async deleteStudent(@Param('id') id: number) {
    return this.studentService.deleteStudent(id);
  }
}
