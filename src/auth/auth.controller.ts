import { Controller, Post, Body, } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { registerDto } from './dto/register.dto.js';
import { loginDto } from './dto/login.dto.js';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Registration endpoint
  @Post('register')
  register(@Body() registerDto: registerDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  login(@Body() loginDto: loginDto) {
    return this.authService.loginDto(loginDto);
  }

  @Post('logout')
  logout() {
    return this.authService.logout();
  }

}
