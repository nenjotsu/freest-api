import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MONGO } from '@common/constants';
import {
  ICreateRestModel,
  IRestID,
} from '../../modules/superhero/models/create.model';

@Injectable()
export class SuperheroServiceQueries {
  constructor(
    @Inject(MONGO.MODEL_SUPERHERO)
    private readonly model: typeof Model,
  ) {}

  async getAllRest(): Promise<ICreateRestModel[]> {
    const data = await this.model.find().exec();
    // .limit(10)
    return data;
  }

  async getSingleRest(id: IRestID): Promise<ICreateRestModel> {
    const data = await this.model
      .findById(id)
      .select('-__v')
      .exec();
    return data;
  }
}
