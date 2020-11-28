import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private readonly configService: ConfigService) {
    const mongo = this.configService.get<string>('MONGODB_CONNECTIONS_PATH');
    console.log('>>>>>', mongo);
  }
}
