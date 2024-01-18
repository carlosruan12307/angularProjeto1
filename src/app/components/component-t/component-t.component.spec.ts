import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTComponent } from './component-t.component';

describe('ComponentTComponent', () => {
  let component: ComponentTComponent;
  let fixture: ComponentFixture<ComponentTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
