import { Injectable } from '@nestjs/common';
import { MailRepository } from '../repository/MailRepository';
import { CreateMailDto } from '../dto/create-mail.dto';

@Injectable()
export class SendEmailUseCase {
  constructor(private readonly mailRepository: MailRepository) {}

  async execute(dto: CreateMailDto) {
    return this.mailRepository.sendMail(dto);
  }
}
