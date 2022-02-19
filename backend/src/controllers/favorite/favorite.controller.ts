import { Controller, Get } from '@nestjs/common';
import { Authorization } from 'src/decorators/authorization.decorator';
import { DbService } from 'src/services/db/db.service';
import { Favorite } from 'src/types/favorite.type';
import { LoginJwt } from 'src/types/login.type';

@Controller('favorite')
export class FavoriteController {

    constructor(
        private dbService: DbService
    ) { }

    @Get()
    async getFavorites(@Authorization() loginJwt: LoginJwt): Promise<Favorite[]> {
        return this.dbService.getCollection('favorites').find<Favorite>({ userName: loginJwt.name }).sort({ sort: 1 }).toArray();
    }

}
