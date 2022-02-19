import { Controller, Get, Param, Post } from '@nestjs/common';
import axios from 'axios';
import { Authorization } from 'src/decorators/authorization.decorator';
import { DbService } from 'src/services/db/db.service';
import { LoginJwt } from 'src/types/login.type';
import { Pins } from 'src/types/pin.type';

@Controller('pin')
export class PinController {

    constructor(
        private dbService: DbService
    ) { }

    @Get()
    async getPins(@Authorization() loginJwt: LoginJwt): Promise<Pins> {
        return this.dbService.getCollection('pins').findOne<Pins>();
    }

    @Post(':pin')
    async switch(@Authorization() loginJwt: LoginJwt, @Param('pin') pin: number) {
        axios.get(`${process.env.CORE_URL}/?${pin}`);
    }
    
}
