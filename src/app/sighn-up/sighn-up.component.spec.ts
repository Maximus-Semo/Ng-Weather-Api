import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SighnUpComponent } from './sighn-up.component';

describe('SighnUpComponent', () => {
  let component: SighnUpComponent;
  let fixture: ComponentFixture<SighnUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SighnUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SighnUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
