import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorite } from 'src/app/types/favorite.type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getFavorites(): Observable<Favorite[]> {
    return this.httpClient.get<Favorite[]>(`${environment.api}/favorite`)
  }

}
