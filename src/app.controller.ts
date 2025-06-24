import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { RegisterUserDto } from './dto/register-user.dto/register-user.dto';    

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private prisma : PrismaService) {}

  @Get()
  getHello(): string {
    return this.prisma.user.findMany();
  }

  @Post("create")
  create(@Body() data: RegisterUserDto) {
    return this.prisma.user.create({ data });
  }
}
