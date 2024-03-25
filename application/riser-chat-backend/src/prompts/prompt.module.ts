import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Prompt, PromptSchema } from './prompt.schema';
import { PromptController } from './prompt.controller';
import { PromptService } from './prompt.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Prompt.name, schema: PromptSchema }])],
    controllers: [PromptController],
    providers: [PromptService],
  })
export class PromptModule {}
