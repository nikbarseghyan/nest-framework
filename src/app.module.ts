import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenModule } from './token/token.module';
import { configModule, connectMongo, optionMongo } from './configure.root';
@Module({
  imports: [
    UserModule,
    AuthModule,
    configModule,
    MongooseModule.forRoot(connectMongo, optionMongo),
    TokenModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
