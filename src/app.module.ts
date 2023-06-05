import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI,{
      dbName: process.env.MONGO_DB_NAME, //En casso de usarlo en local (Será lo más común) borrar este objeto del segundo parámetro.
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
