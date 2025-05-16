import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

// auth.service.ts
async validateUser(email: string, password: string): Promise<any> {
  this.logger.log(`Validating user with email: ${email}`);
  const user = await this.usersService.findByEmail(email);
  
  if (!user) {
    this.logger.log('User not found');
    return null;
  }
  
  try {
    // Standard bcrypt comparison
    const isPasswordValid = await bcrypt.compare(password, user.password);
    this.logger.debug(`Password validation result: ${isPasswordValid}`);
    
    if (!isPasswordValid) {
      this.logger.log('Invalid password');
      return null;
    }
    
    const { password: _, ...result } = user;
    return result;
  } catch (error) {
    this.logger.error(`Error validating password: ${error.message}`);
    return null;
  }
}

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    
    return {
      user: {
        id: user.id,
        email: user.email,
        fname: user.fname,
        lname: user.lname,
      },
      access_token: this.jwtService.sign(payload),
    };
  }
}