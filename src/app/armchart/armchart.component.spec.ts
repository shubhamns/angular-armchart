import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmchartComponent } from './armchart.component';

describe('ArmchartComponent', () => {
  let component: ArmchartComponent;
  let fixture: ComponentFixture<ArmchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
