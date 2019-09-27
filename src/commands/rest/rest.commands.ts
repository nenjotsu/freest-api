import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MONGO } from '@common/constants';
import {
  CreateRestModel,
  ICreateRestModel,
  IRestID,
} from 'src/modules/rest/models/create.model';
import { RestDocumentSchema } from 'src/modules/rest/rest.schema';

@Injectable()
export class RestServiceCommands {
  constructor(
    @Inject(MONGO.REST_MODEL)
    private readonly model: Model<ICreateRestModel>,
  ) {}

  async createRest(
    createRestModel: CreateRestModel,
  ): Promise<ICreateRestModel> {
    const rest = await new this.model(createRestModel);
    return rest.save();
  }

  async updateRest(
    id: IRestID,
    createRestModel: CreateRestModel,
  ): Promise<ICreateRestModel | null> {
    const updatedRest = await this.model.findByIdAndUpdate(
      id,
      createRestModel,
      { new: true },
    );
    return updatedRest;
  }

  async deleteRest(id: IRestID): Promise<any> {
    const deletedRest = await this.model.findOneAndDelete(id);
    return deletedRest;
  }
}
