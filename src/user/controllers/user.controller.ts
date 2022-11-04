import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('user')
export class UserController {
  @Get()
  getAll(@Res() response: Response): void {
    response.status(200).send("'Estos son todos los usuarios'");
  }
}
