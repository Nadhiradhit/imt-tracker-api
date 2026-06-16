import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  InternalServerErrorException,
} from '@nestjs/common';
import { loginDto } from './dto/login.dto.js';
import { registerDto } from './dto/register.dto.js';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service.js';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  // Registration logic to be implemented here. For now, we will just create a user for testing purposes.
  async register(registerDto: registerDto) {
    const existingEmail = await this.prisma.user.findUnique({
      where: { email: registerDto.email },
    })

    if (existingEmail) {
      throw new ConflictException('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: registerDto.email,
        name: registerDto.name,
        password: hashedPassword,
      }
    })

    return {
      message: 'User registered successfully',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      access_token: await this.jwtService.signAsync(user),
    }

  }

  // Login logic to be implemented here. For now, we will just create a user for testing purposes.
  async loginDto(loginDto: loginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: loginDto.email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return {
      message: 'User logged in successfully',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      access_token: await this.jwtService.signAsync(user),
    };
  }

  // Logout logic to be implemented here.
  async logout(){
    
   const removeToken = await this.jwtService.signAsync({});

    return {
      message: 'User logged out successfully',
      data: {
        access_token: removeToken,
      }
    }
  }
  
}
