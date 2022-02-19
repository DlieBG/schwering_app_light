import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PinService } from 'src/app/services/pin/pin.service';
import { Favorite } from 'src/app/types/favorite.type';

@Component({
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit {

  constructor(
    private dialog: MatDialogRef<ValidateComponent>,
    @Inject(MAT_DIALOG_DATA)
    public favorite: Favorite,
    private pinService: PinService
  ) { }

  ngOnInit(): void {
  }

  switch() {
    this.pinService.switch(this.favorite.pin);
    this.dialog.close();
  }

  close() {
    this.dialog.close();
  }

}
