import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MONGO } from '@common/constants';
import {
  CreateRestModel,
  ICreateRestModel,
  IRestID,
} from '../../modules/superhero/models/create.model';

@Injectable()
export class SuperheroServiceCommands {
  constructor(
    @Inject(MONGO.MODEL_SUPERHERO)
    private readonly model: Model<ICreateRestModel>,
  ) {}

  async createRest(model: CreateRestModel): Promise<ICreateRestModel> {
    const data = await new this.model(model);
    return data.save();
  }

  async updateRest(
    id: IRestID,
    model: CreateRestModel,
  ): Promise<ICreateRestModel | null> {
    const data = await this.model.findByIdAndUpdate(id, model, {
      new: true,
    });
    return data;
  }

  async deleteRest(id: IRestID): Promise<ICreateRestModel | null> {
    const data = await this.model.findOneAndDelete(id);
    return data;
  }
}
