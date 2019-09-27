import { BadRequestException } from '@nestjs/common';
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

interface ReasonType {
  [type: string]: string;
}

type MetaType = string | boolean | number | any[] | object;

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata;

    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      const reasons: ReasonType[] = [];
      errors.forEach(err => {
        reasons.push(err.constraints);
      });
      throw new BadRequestException({
        message: 'Validation failed',
        reasons,
      });
    }

    return value;
  }

  private toValidate(metatype: MetaType): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.find(type => metatype === type);
  }
}
