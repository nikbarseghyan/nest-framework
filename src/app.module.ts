import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenModule } from './token/token.module';
import { configModule, connectMongo, optionMongo } from './configure.root';
import { MailModule } from './mail/mail.module';
@Module({
    imports: [
        UserModule,
        AuthModule,
        configModule,
        MongooseModule.forRoot(connectMongo, optionMongo),
        TokenModule,
        MailModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
