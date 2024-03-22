import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { OpenaiService } from './openai.service';

@Controller('openai')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) {}

  @Post('chat-completions')
  @HttpCode(HttpStatus.OK)
  async createChatCompletion(
    @Body('prompt') prompt: string,
  ): Promise<{ response: string }> {
    const response = await this.openaiService.createChatCompletion(prompt);
    return { response };
  }
}
