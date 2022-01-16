import { Injectable } from '@nestjs/common';
import { students } from '../../db/db';
import {
  StudentsResponseDto,
  CreateStudentDto,
  UpdateStudentDto,
} from '../dto/student.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  private students = students;

  getStudents(): StudentsResponseDto[] {
    return this.students;
  }

  getStudentById(studentId: string): StudentsResponseDto {
    return this.students.find((student) => {
      return student.id === studentId;
    });
  }

  createStudent(data: CreateStudentDto): StudentsResponseDto {
    const newStudent = {
      id: uuid(),
      ...data,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(id: string, data: UpdateStudentDto): StudentsResponseDto {
    let updatedStudent: StudentsResponseDto;

    const studentToUpate = this.students.map((student) => {
      if (student.id === id) {
        updatedStudent = {
          id,
          ...data,
        };
        return updatedStudent;
      } else {
        return student;
      }
    });

    this.students = studentToUpate;

    return updatedStudent;
  }
}
