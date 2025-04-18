import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFacultyComponent } from './view-faculty.component';

describe('ViewFacultyComponent', () => {
  let component: ViewFacultyComponent;
  let fixture: ComponentFixture<ViewFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewFacultyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
