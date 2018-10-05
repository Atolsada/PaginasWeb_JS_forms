import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AticuloComponent } from './aticulo.component';

describe('AticuloComponent', () => {
  let component: AticuloComponent;
  let fixture: ComponentFixture<AticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
