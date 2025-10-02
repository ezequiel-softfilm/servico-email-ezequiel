import { Body, Controller, Post } from '@nestjs/common';
import { CreateMailDto } from './dto/create-mail.dto';
import { SendEmailUseCase } from './use-cases/send-email.use-case';

@Controller('mail')
export class MailController {
  constructor(private readonly sendEmailUseCase: SendEmailUseCase) {}

  @Post('send')
  async send(@Body() dto: CreateMailDto) {
    return this.sendEmailUseCase.execute(dto);
  }
}
