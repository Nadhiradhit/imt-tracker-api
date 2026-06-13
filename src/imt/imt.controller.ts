import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImtService } from './imt.service.js';
import { CreateImtDto } from './dto/create-imt.dto.js';
import { UpdateImtDto } from './dto/update-imt.dto.js';

@Controller('imt')
export class ImtController {
  constructor(private readonly imtService: ImtService) {}

  @Post()
  create(@Body() createImtDto: CreateImtDto) {
    return this.imtService.create(createImtDto);
  }

  @Get()
  findAll() {
    return this.imtService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imtService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImtDto: UpdateImtDto) {
    return this.imtService.update(+id, updateImtDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imtService.remove(+id);
  }
}
