import {Controller, Get, Post, Query, HttpCode, Body, Param, UseFilters, UsePipes, UseGuards, UseInterceptors} from '@nestjs/common';
import {CreateCatDto} from 'src/cats/dto/create-cat.dto';
import {CatsService} from './cats.service';
import {Cat} from 'src/cats/interfaces/cat.interface';
import {HttpExceptionFilter} from 'src/common/exceptionFilters/http.filter';
import { JoiValidationPipe, createCatSchema } from 'src/common/validation/joiValidationPipe';
import { ValidationPipe } from 'src/common/validation/validationPipe';
import { RolesGuard } from 'src/common/guard/rolesGuard';
import { Roles } from 'src/common/decorator/roles.decorator';
import { LoggingInterceptor } from 'src/common/interceptor/logging.interceptor';

@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    console.log(789);
    return this.catsService.findAll();
  }

  @Post()
  @Roles('admin')
  // @UsePipes(new JoiValidationPipe(createCatSchema))
  // @UsePipes(new ValidationPipe())
  async create(@Body() createCatDto: CreateCatDto) {
    // throw new HttpExceptionFilter();
    this.catsService.create(createCatDto);
  }
}
