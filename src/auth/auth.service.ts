import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignOptions } from 'jsonwebtoken';
import { JwtService } from '@nestjs/jwt';

import { TokenService } from 'src/token/token.service';
import { CreateUserTokenDto } from 'src/token/dto/create-user-token.dto';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(
        private readonly configService: ConfigService,
        private readonly userService: UserService,
        private readonly tokenService: TokenService,
        private readonly jwtService: JwtService,
    ) {
        const mongo = this.configService.get<string>('MONGODB_CONNECTIONS_PATH');
        console.log('>>>>>', mongo);
    }

    signUp(createUserDto: CreateUserDto) {}
    signIn(email: string, password: string) {}

    private async generateToken(data, options?: SignOptions): Promise<string> {
        return this.jwtService.sign(data, options);
    }

    private async verifyToken(token): Promise<any> {
        try {
            const data = this.jwtService.verify(token),
                tokenExists = this.tokenService.exists(data._id, token);

            if (tokenExists) data;
            throw new UnauthorizedException();
        } catch (err) {
            console.log(err.message);
            throw new UnauthorizedException();
        }
    }

    private async saveToken(createUserTokenDto: CreateUserTokenDto) {
        const userToken = await this.tokenService.create(createUserTokenDto);

        return userToken;
    }
}
