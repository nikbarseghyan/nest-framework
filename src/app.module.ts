import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenModule } from './token/token.module';

const env = process.env.NODE_ENV || 'development';
@Module({
  imports: [
    UserModule,
    AuthModule,

    ConfigModule.forRoot({
      envFilePath: `.env.${env}`,
      isGlobal: true,
    }),

    MongooseModule.forRoot(process.env.MONGODB_CONNECTIONS_PATH, {
      useNewUrlParser: true,
      useUnifiebTopology: true,
    }),

    TokenModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
