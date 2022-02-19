import { Controller, Get, Headers, UnauthorizedException } from '@nestjs/common';
import { LoginJwt } from 'src/types/login.type';
import axios from 'axios';
import { Authorization } from 'src/decorators/authorization.decorator';

@Controller('login')
export class LoginController {

    @Get()
    async check(@Authorization() loginJwt: LoginJwt): Promise<LoginJwt> {
        return loginJwt;        
    }
    
}
