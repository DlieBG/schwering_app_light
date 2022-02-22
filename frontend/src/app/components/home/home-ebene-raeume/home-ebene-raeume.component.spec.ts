import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEbeneRaeumeComponent } from './home-ebene-raeume.component';

describe('HomeEbeneRaeumeComponent', () => {
  let component: HomeEbeneRaeumeComponent;
  let fixture: ComponentFixture<HomeEbeneRaeumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEbeneRaeumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEbeneRaeumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
