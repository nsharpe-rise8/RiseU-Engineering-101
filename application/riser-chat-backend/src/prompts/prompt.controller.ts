import { Body, Controller, Get, Post } from '@nestjs/common';
import { PromptService } from './prompt.service';
import { CreatePromptDto } from './dtos/create-prompt.dto';

@Controller('prompts')
export class PromptController {
    constructor(private readonly promptService: PromptService) {}

    @Post()
    async savePrompt(@Body() createPromptDto: CreatePromptDto) {
        const savedPrompt = await this.promptService.create(createPromptDto)
        return { success: true, prompt: savedPrompt }
    }

    @Get()
    async getPrompts() {
        const prompts = await this.promptService.findAll()
        return { success: true, prompt: prompts }
    }
}
