import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiacaoComponent } from './premiacao.component';

describe('PremiacaoComponent', () => {
  let component: PremiacaoComponent;
  let fixture: ComponentFixture<PremiacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiacaoComponent]
    });
    fixture = TestBed.createComponent(PremiacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
