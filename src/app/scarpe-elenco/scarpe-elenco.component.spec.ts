import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScarpeElencoComponent } from './scarpe-elenco.component';

describe('ScarpeElencoComponent', () => {
  let component: ScarpeElencoComponent;
  let fixture: ComponentFixture<ScarpeElencoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScarpeElencoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScarpeElencoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
