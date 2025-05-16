import { Controller, Get, Logger } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);
  
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    this.logger.log('Getting all users');
    const users = await this.usersService.findAll();
    
    // Remove password from response for security
    return users.map(user => {
      const { password, ...userInfo } = user;
      return userInfo;
    });
  }
}