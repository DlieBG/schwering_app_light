import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pins } from 'src/app/types/pin.type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PinService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPins(): Observable<Pins> {
    return this.httpClient.get<Pins>(`${environment.api}/pin`);
  }

  switch(pin: number) {
    this.httpClient.post(`${environment.api}/pin/${pin}`, {}).subscribe();
  }

}
