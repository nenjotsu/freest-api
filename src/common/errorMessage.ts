import { BadRequestException } from '@nestjs/common';

export const throwBadRequestException = (reasons: any, message: string) => {
  throw new BadRequestException({
    message,
    reasons,
  });
};
