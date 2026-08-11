import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCelular } from './detalle-juego';

describe('DetalleCelular', () => {
  let component: DetalleCelular;
  let fixture: ComponentFixture<DetalleCelular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleCelular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleCelular);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
