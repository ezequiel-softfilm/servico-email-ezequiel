import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Config global para todo o app
    }),
    MailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
