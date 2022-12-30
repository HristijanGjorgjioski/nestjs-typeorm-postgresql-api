import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.development.env' }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: 'nest_api_learning',
      // database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
      // entities: [User],
      entities: ['dist/**/entities/*.entity.{ts,js}'],
      migrations: ['dist/src/migrations/*.{ts,js}'],
      migrationsTableName: 'typeorm_migrations',
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
