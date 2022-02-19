import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoginController } from './controllers/login/login.controller';
import { DbService } from './services/db/db.service';
import { PinController } from './controllers/pin/pin.controller';
import { FavoriteController } from './controllers/favorite/favorite.controller';

@Module({
  imports: [
    ConfigModule.forRoot()
  ],
  controllers: [LoginController, PinController, FavoriteController],
  providers: [DbService],
})
export class AppModule {}
