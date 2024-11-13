import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export default class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
