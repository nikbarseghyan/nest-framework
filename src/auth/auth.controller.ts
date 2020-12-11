import { Controller, Post, Body, Get, Query, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { ConfirmAccountDto } from './dto/confirm-account.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/signUp')
    async signUp(@Body(ValidationPipe) createUserDto: CreateUserDto): Promise<boolean> {
        return this.authService.signUp(createUserDto);
    }

    @Get('confirm')
    async confirm(@Query(ValidationPipe) query: ConfirmAccountDto) {
        await this.authService.confirm(query.token);
        return true;
    }
}
