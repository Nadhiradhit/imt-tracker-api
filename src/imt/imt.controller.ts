import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { ImtService } from './imt.service.js';
import { UseGuards } from '@nestjs/common';
import { CreateImtDto } from './dto/create-imt.dto.js';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard.js';
import { PrismaService } from '../prisma/prisma.service.js';


@Controller('imt')
export class ImtController {
  constructor(
    private readonly imtService: ImtService, 
    private readonly PrismaService: PrismaService,
  ) {}

  @Post('calculate')
  @UseGuards(JwtAuthGuard)
  async createImt(@Body() createImtDto: CreateImtDto, @Req() req) {
    const userId = req.user.id; 
    return this.imtService.createImt(createImtDto, userId);
  }

  @Patch("update/:id")
  @UseGuards(JwtAuthGuard)
  async updateImt(@Param('id') id: string, @Body() createImtDto: CreateImtDto) {
    return this.imtService.updateImt(id, createImtDto);
  }

  @Get('history')
  @UseGuards(JwtAuthGuard)
  async getImtById(@Req() req) {
    const userId = req.user.id; 
    return this.imtService.getImtById(userId);
  }

  @Delete('delete/:id')
  @UseGuards(JwtAuthGuard)
  async deleteImt(@Param('id') id: string) {
    return this.imtService.deleteImt(id);
  }
}
