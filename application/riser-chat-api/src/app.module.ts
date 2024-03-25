import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenaiController } from './openai/openai.controller';
import { OpenaiService } from './openai/openai.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController, OpenaiController],
  providers: [AppService, OpenaiService],
})
export class AppModule {}
