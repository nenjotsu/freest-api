import { ApiModelProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { IsInt, IsBoolean, IsString } from 'class-validator';

export interface IRestID {
  id: string;
}

export interface ICreateRestModel extends Document {
  userName: string;
  age: number;
}

export class CreateRestModel {
  @ApiModelProperty()
  @IsString()
  readonly userName!: string;

  @ApiModelProperty()
  @IsInt()
  readonly age!: number;
}
