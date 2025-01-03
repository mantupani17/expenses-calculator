import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpensesModule } from './expenses/expenses.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import config from './configs/env.config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './entities/expense.entity';

@Module({
  imports: [
    ExpensesModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ config ]
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `${configService.get<string>('mongodb.uri')}/${configService.get<string>('mongodb.db')}`,
      }),
      inject: [ConfigService],
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('mysql.host'),
        port: configService.get<number>('mysql.port'),
        username: configService.get<string>('mysql.username'),
        password: configService.get<string>('mysql.password'),
        database: configService.get<string>('mysql.database'),
        synchronize: true, // Consider using migrations in production
        entities: [
          Expense
        ],
        logging: configService.get<boolean>('mysql.debug'),
      }),
      inject: [ConfigService],
    }),

    TypeOrmModule.forFeature([Expense]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
