import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FavoriteService } from 'src/app/services/favorite/favorite.service';
import { LoginService } from 'src/app/services/login/login.service';
import { PinService } from 'src/app/services/pin/pin.service';
import { Favorite } from 'src/app/types/favorite.type';
import { LoginJwt } from 'src/app/types/login.type';
import { ValidateComponent } from '../validate/validate.component';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  favorites$!: Observable<Favorite[]>;

  constructor(
    private dialog: MatDialog,
    private favoriteService: FavoriteService
  ) { }

  ngOnInit(): void {
    this.favorites$ = this.favoriteService.getFavorites();
  }

  switch(favorite: Favorite) {
    this.dialog.open(ValidateComponent, { data: favorite, backdropClass: 'backdrop' });
  }

}
