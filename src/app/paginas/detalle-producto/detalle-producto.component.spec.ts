import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePropiedadComponent } from './detalle-producto.component';

describe('DetallePropiedadComponent', () => {
  let component: DetallePropiedadComponent;
  let fixture: ComponentFixture<DetallePropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallePropiedadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
