import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getAll() {
    return 'Estos son todos los usuarios';
  }
}
