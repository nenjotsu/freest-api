import { ApiModelProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { IsInt, IsBoolean, IsString } from 'class-validator';

export interface IRestID {
  _id: string;
}

export interface ICreateRestModel extends Document {
  name: string;
  dateAppearance: string;
  place: string;
  aliases: string[];
  powerStats: PowerStats;
  appearance: Appearance;
}

export interface PowerStats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

export interface AppearanceWeight {
  lb: number;
  kg: number;
}

export interface Appearance {
  gender: string;
  race: string;
  weight: AppearanceWeight[];
}

export class CreateRestModel {
  @ApiModelProperty()
  @IsString()
  readonly name!: string;

  @ApiModelProperty()
  @IsString()
  readonly dateAppearance!: string;

  @ApiModelProperty()
  @IsString()
  readonly place!: string;

  @ApiModelProperty()
  readonly powerStats!: PowerStats;

  @ApiModelProperty()
  readonly appearance!: Appearance;

  @ApiModelProperty()
  readonly aliases!: string[];
}
