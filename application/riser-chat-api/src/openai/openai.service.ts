import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class OpenaiService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY, // Ensure your API key is stored in .env file
    });
  }

  async createChatCompletion(prompt: string): Promise<string> {
    try {
      const completion = await this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo', // Specify the model you're using
        messages: [{ role: 'system', content: prompt }],
      });

      // Assuming you want the first response for simplicity
      return completion.choices[0].message.content;
    } catch (error) {
      console.error('Error creating chat completion:', error);
      throw new Error('Failed to create chat completion.');
    }
  }
}
