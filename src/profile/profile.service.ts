import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto.js';
import { UpdateProfileDto } from './dto/update-profile.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProfileService {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async createProfile(createProfileDto: CreateProfileDto, userId: string){

    const create = await this.prisma.profile.create({
      data: {
        bio: createProfileDto.bio ?? null,
        picture: createProfileDto.picture ?? null,
        userId: userId,
      }
    })
    
    return {
      message: "Profile successfully",
      data: {
        id: create.id,
        userId: create.userId,
        bio: create.bio,
        picture: create.picture,
      }
    }
  }

  async updateProfile(UpdateProfileDto: UpdateProfileDto, id: string){

    const update = await this.prisma.profile.update({
      where: { id },
      data: {
        bio: UpdateProfileDto.bio ?? null,
        picture: UpdateProfileDto.picture ?? null,
      }
    })

    return{
      message: "Update profile successfully",
      data: {
        id: update.id,
        userId: update.userId,
        bio: update.bio,
        picture: update.bio
      }
    }

  }
}
