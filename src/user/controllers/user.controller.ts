import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { Observable, of } from 'rxjs';
import { CreateUsertDto } from '../dto/create-user.dto';

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
  @Post()
  async create(@Body() createUserDto: CreateUsertDto) {
    console.log(createUserDto);
    return 'This action adds a new user';
  }
}
