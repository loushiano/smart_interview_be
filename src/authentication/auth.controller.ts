import { 
  Controller, 
  Post, 
  Body, 
  UnauthorizedException, 
  Logger,
  InternalServerErrorException  // Add this import
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    try {
      this.logger.log(`Login attempt for user: ${loginDto.email}`);
      
      const user = await this.authService.validateUser(
        loginDto.email,
        loginDto.password,
      );
      
      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }
      
      return this.authService.login(user);
    } catch (error) {
      this.logger.error(`Login error: ${error.message}`);
      
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      
      throw new InternalServerErrorException('An error occurred during login');
    }
  }
}