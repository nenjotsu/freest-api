import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MONGO } from '@common/constants';
import {
  CreateRestModel,
  ICreateRestModel,
  IRestID,
} from '../../modules/rest/models/create.model';

@Injectable()
export class RestServiceCommands {
  constructor(
    @Inject(MONGO.REST_MODEL)
    private readonly model: Model<ICreateRestModel>,
  ) {}

  async createRest(model: CreateRestModel): Promise<ICreateRestModel> {
    const rest = await new this.model(model);
    return rest.save();
  }

  async updateRest(
    id: IRestID,
    model: CreateRestModel,
  ): Promise<ICreateRestModel | null> {
    const updatedRest = await this.model.findByIdAndUpdate(id, model, {
      new: true,
    });
    return updatedRest;
  }

  async deleteRest(id: IRestID): Promise<ICreateRestModel | null> {
    const data = await this.model.findOneAndDelete(id);
    return data;
  }
}
