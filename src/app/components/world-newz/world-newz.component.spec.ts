import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldNewzComponent } from './world-newz.component';

describe('WorldNewzComponent', () => {
  let component: WorldNewzComponent;
  let fixture: ComponentFixture<WorldNewzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorldNewzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorldNewzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
