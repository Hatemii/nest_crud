import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { db_service } from 'src/database.service';
import { StudentModule } from 'src/student/student.module';

@Module({
  imports: [TypeOrmModule.forRoot(db_service), StudentModule],
})
export class AppModule {}
