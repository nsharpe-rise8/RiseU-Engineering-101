import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Prompt } from './prompt.schema';
import { Model } from 'mongoose';
import { CreatePromptDto } from './dtos/create-prompt.dto';


@Injectable()
export class PromptService {
  constructor(@InjectModel(Prompt.name) private promptModel: Model<Prompt>) {}

  async create(createPromptDto: CreatePromptDto): Promise<Prompt> {
    const createdCat = new this.promptModel(createPromptDto);
    return createdCat.save();
  }

  async findAll(): Promise<Prompt[]> {
    return this.promptModel.find().exec();
  }
}
