import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogArmaComponent } from './dialog-arma.component';

describe('DialogArmaComponent', () => {
  let component: DialogArmaComponent;
  let fixture: ComponentFixture<DialogArmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogArmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogArmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
