import { ApiModelProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { IsInt, IsBoolean, IsString } from 'class-validator';

export interface IRestID {
  _id: string;
}

export interface ICreateRestModel extends Document {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  budget: string;
}

export class CreateRestModel {
  @ApiModelProperty()
  @IsInt()
  readonly id!: number;

  @ApiModelProperty()
  @IsString()
  readonly name!: string;

  @ApiModelProperty()
  @IsString()
  readonly startDate!: string;

  @ApiModelProperty()
  @IsString()
  readonly endDate!: string;

  @ApiModelProperty()
  @IsInt()
  readonly budget!: number;
}
