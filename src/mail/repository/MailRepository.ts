import * as nodemailer from 'nodemailer';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateMailDto } from '../dto/create-mail.dto';

@Injectable()
export class MailRepository {
  private transporter: nodemailer.Transporter;

  constructor(private readonly configService: ConfigService) {

    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('MAIL_HOST'),
      port: this.configService.get<number>('MAIL_PORT'),
      secure: this.configService.get<string>('MAIL_SECURE') === 'true',
      auth: {
        user: this.configService.get<string>('MAIL_USER'),
        pass: this.configService.get<string>('MAIL_PASS'),
      },
    });
  }

  async sendMail(dto: CreateMailDto) {
    try {
      const mailOptions = {
        from: this.configService.get<string>('MAIL_FROM'),
        to: dto.to,
        subject: dto.subject,
        text: dto.text,
        html: dto.html,
      };

      const info = await this.transporter.sendMail(mailOptions);
      return { success: true, info };
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      throw new InternalServerErrorException('Falha ao enviar e-mail.');
    }
  }
}
