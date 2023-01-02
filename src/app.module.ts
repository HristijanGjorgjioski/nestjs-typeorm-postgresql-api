import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import DataSource from '../typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./src/.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      ...DataSource.options,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
