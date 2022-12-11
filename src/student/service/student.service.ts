import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentEntity } from '../model/student.entity';
import { students } from '../../db/db';
import e from 'express';

@Injectable()
export class StudentService {
  @InjectRepository(StudentEntity)
  repository: Repository<StudentEntity>;

  getAllStudents() {
    return this.repository.createQueryBuilder().getMany();
  }

  getOneStudent(id) {
    return this.repository.findOne({ where: { id: id } });
  }

  createStudent(data) {
    return this.repository.create(data);
  }

  updateStudent(id, data) {
    return this.repository.update(id, data).then((res) => {
      if (res.affected > 0) {
        return 'successfully updated';
      } else {
        return `cant find user with id ${id}`;
      }
    });
  }

  deleteStudent(id) {
    return this.repository.delete(id).then((res) => {
      if (res.affected > 0) {
        return 'successfully deleted';
      } else {
        return `cant find user with id ${id}`;
      }
    });
  }
}
