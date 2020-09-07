import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventuresDetailsComponent } from './adventures-details.component';

describe('AdventuresDetailsComponent', () => {
  let component: AdventuresDetailsComponent;
  let fixture: ComponentFixture<AdventuresDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventuresDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventuresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
