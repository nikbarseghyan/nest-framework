import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Mailgun from 'mailgun-js';
import { IMailGunData } from './interfaces/mail.interface';

@Injectable()
export class MailService {
    private mg: Mailgun.Mailgun;

    constructor(private readonly configService: ConfigService) {
        this.mg = Mailgun({
            apiKey: this.configService.get<string>(''),
            domain: this.configService.get<string>(''),
        });
    }

    send(data: IMailGunData): Promise<Mailgun.messages.SendResponse> {
        return new Promise((resolve, reject) => {
            this.mg.messages().send(data, (err, body) => {
                if (err) {
                    reject(err);
                }
                resolve(body);
            });
        });
    }
}
