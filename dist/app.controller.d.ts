import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { RegisterUserDto } from './dto/register-user.dto/register-user.dto';
export declare class AppController {
    private readonly appService;
    private prisma;
    constructor(appService: AppService, prisma: PrismaService);
    getHello(): string;
    create(data: RegisterUserDto): any;
}
