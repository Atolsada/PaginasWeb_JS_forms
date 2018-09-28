import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieComponent } from './pie.component';

describe('PieComponent', () => {
  let component: PieComponent;
  let fixture: ComponentFixture<PieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should not be empty the "lugar"',()=>{
    expect(component.lugar).toBeTruthy
  })
  it('should be empty the "empresa"',()=>{
    expect(component.empresa).toEqual('Kamisankawa')
  })
});
