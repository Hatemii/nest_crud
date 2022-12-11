import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentEntity } from '../model/student.entity';

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
    const new_student = this.repository.create(data); // create() creates new instance of entity, but doesn't put it into db
    return this.repository.save(new_student);
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
