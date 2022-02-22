import { Component, Input, OnInit } from '@angular/core';
import { PinService } from 'src/app/services/pin/pin.service';
import { Raum, Schalter } from 'src/app/types/pin.type';

@Component({
  selector: 'app-home-ebene-raeume',
  templateUrl: './home-ebene-raeume.component.html',
  styleUrls: ['./home-ebene-raeume.component.scss']
})
export class HomeEbeneRaeumeComponent implements OnInit {

  @Input() raeume!: Raum[];

  selectedIndex: number | null = null;

  constructor(
    private pinService: PinService
  ) { }

  ngOnInit(): void {
  }

  switch(schalter: Schalter) {
    this.pinService.switch(schalter.pin);
  }

}
