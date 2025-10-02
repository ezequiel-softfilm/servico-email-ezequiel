import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateMailDto
{
  @IsEmail({}, { message: 'E-mail de destino inválido.' })
  to: string;

  @IsString()
  @IsNotEmpty({ message: 'O assunto é obrigatório.' })
  subject: string;

  @IsOptional()
  text?: string;

  @IsOptional()
  html?: string;
}
