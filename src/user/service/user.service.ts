import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class UserService {
  @InjectRepository(UserEntity)
  repository: Repository<UserEntity>;

  getAllUsers() {
    return this.repository.createQueryBuilder().getMany();
  }

  getOneUser(id: number) {
    return this.repository.findOne({ where: { id: id } });
  }

  createUser(data: UserEntity) {
    const newUser = this.repository.create(data);
    return this.repository.save(newUser);
  }
}
