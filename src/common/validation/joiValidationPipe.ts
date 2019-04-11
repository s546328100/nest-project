import * as Joi from 'joi';
import {Injectable, PipeTransform, ArgumentMetadata, BadRequestException} from '@nestjs/common';

export const createCatSchema: Joi.ObjectSchema = Joi.object({
  name: Joi.string().required()
})

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private readonly schema: Object) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const {error} = Joi.validate(value, this.schema);
    if (error) throw new BadRequestException('Validation failed');
    return value;
  }
}
