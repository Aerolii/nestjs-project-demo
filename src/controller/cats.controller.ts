import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ListAllEntities, CreateCatDto } from './dto';

@Controller('cats')
export default class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return `This action adds a new cat ${createCatDto.name}`;
  }

  @Get()
  findAll(@Query() query: ListAllEntities): string {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: CreateCatDto): string {
    return `This action updates a #${updateCatDto.name} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This action removes a #${id} cat`;
  }
}
