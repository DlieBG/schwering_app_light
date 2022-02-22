import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PinService } from 'src/app/services/pin/pin.service';
import { Pins } from 'src/app/types/pin.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pins$!: Observable<Pins>;

  constructor(
    private pinService: PinService
  ) { }

  ngOnInit(): void {
    this.getPins();
  }

  getPins() {
    this.pins$ = this.pinService.getPins();
  }

}
