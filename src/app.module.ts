import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./src/.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      // database: 'nest_api_learning',
      database: process.env.DATABASE_NAME, // TODO: fix this problem
      autoLoadEntities: true,
      synchronize: true,
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
