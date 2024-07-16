import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceHeadlinesComponent } from './source-headlines.component';

describe('SourceHeadlinesComponent', () => {
  let component: SourceHeadlinesComponent;
  let fixture: ComponentFixture<SourceHeadlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SourceHeadlinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SourceHeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
