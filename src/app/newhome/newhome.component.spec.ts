import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewhomeComponent } from './newhome.component';

describe('NewhomeComponent', () => {
  let component: NewhomeComponent;
  let fixture: ComponentFixture<NewhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
