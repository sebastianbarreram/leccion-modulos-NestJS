import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { Observable, of } from 'rxjs';

@Controller('user')
export class UserController {
  @Get()
  getAll(@Res() response: Response): void {
    response.status(200).send("'Estos son todos los usuarios'");
  }
  @Get('id/:id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} user`;
  }
  @Get('promise')
  async findAll(): Promise<any[]> {
    return [];
  }
  @Get('observable')
  findAll2(): Observable<any[]> {
    return of([]);
  }
}
