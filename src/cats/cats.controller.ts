import {Controller, Get, Post, Query, HttpCode, Body, Param, UseFilters, UsePipes} from '@nestjs/common';
import {CreateCatDto} from 'src/cats/dto/create-cat.dto';
import {CatsService} from './cats.service';
import {Cat} from 'src/cats/interfaces/cat.interface';
import {HttpExceptionFilter} from 'src/common/exceptionFilters/http.filter';
import { JoiValidationPipe, createCatSchema } from 'src/common/validation/joiValidationPipe';
import { ValidationPipe } from 'src/common/validation/validationPipe';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    console.log(789);
    return this.catsService.findAll();
  }

  @Post()
  // @UsePipes(new JoiValidationPipe(createCatSchema))
  // @UsePipes(new ValidationPipe())
  async create(@Body() createCatDto: CreateCatDto) {
    // throw new HttpExceptionFilter();
    this.catsService.create(createCatDto);
  }
}
