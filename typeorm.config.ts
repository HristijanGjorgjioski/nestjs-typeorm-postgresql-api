import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get(`DATABASE_HOST_${process.env.NODE_ENV}`),
  port: configService.get(`DATABASE_PORT_${process.env.NODE_ENV}`),
  username: configService.get(`DATABASE_USER_${process.env.NODE_ENV}`),
  password: configService.get(`DATABASE_PASSWORD_${process.env.NODE_ENV}`),
  database: configService.get(`DATABASE_NAME_${process.env.NODE_ENV}`),
  entities: ['dist/**/entities/*.entity.{ts,js}'],
  migrations: ['dist/src/migrations/*.{ts,js}'],
  migrationsTableName: 'typeorm_migrations',
});
