import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseFundamentalsComponent } from './database-fundamentals.component';

describe('DatabaseFundamentalsComponent', () => {
  let component: DatabaseFundamentalsComponent;
  let fixture: ComponentFixture<DatabaseFundamentalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseFundamentalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseFundamentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
