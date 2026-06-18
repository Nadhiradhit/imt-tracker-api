import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { ProfileService } from './profile.service.js';
import { CreateProfileDto } from './dto/create-profile.dto.js';
import { UpdateProfileDto } from './dto/update-profile.dto.js';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard.js';

@Controller('profile')
export class ProfileController {
  constructor(
    private readonly profileService: ProfileService,
    
  ) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  async createProfile(@Body() CreateProfileDto: CreateProfileDto, @Req() req){
    const userId = req.user.id
    return this.profileService.createProfile(CreateProfileDto, userId)
  }

  @Patch('update/:id')
  @UseGuards(JwtAuthGuard)
  async updateProfile(@Param('id') id: string, @Body() UpdateProfileDto: UpdateProfileDto){
    return this.profileService.updateProfile(UpdateProfileDto, id)
  }
}
