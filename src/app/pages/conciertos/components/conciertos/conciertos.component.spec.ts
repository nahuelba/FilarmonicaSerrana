import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciertosComponent } from './conciertos.component';

describe('ConciertosComponent', () => {
  let component: ConciertosComponent;
  let fixture: ComponentFixture<ConciertosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConciertosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConciertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
