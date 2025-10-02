import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { SendEmailUseCase } from './use-cases/send-email.use-case';
import { MailRepository } from './repository/MailRepository';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [MailController],
  providers: [SendEmailUseCase, MailRepository],
})
export class MailModule {}
