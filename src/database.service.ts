import { TypeOrmModule } from '@nestjs/typeorm';

export const db_service: TypeOrmModule = {
  type: 'sqlite',
  database: 'db',
  synchronize: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
};
