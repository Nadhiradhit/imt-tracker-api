import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImtService } from './imt.service.js';
import { CreateImtDto } from './dto/create-imt.dto.js';


@Controller('imt')
export class ImtController {
  constructor(private readonly imtService: ImtService) {}

  @Post('calculate')
  createImt(@Body() createImtDto: CreateImtDto) {
    return this.imtService.createImt(createImtDto);
  }

 
}
