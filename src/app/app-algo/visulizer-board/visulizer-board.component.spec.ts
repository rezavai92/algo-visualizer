import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisulizerBoardComponent } from './visulizer-board.component';

describe('VisulizerBoardComponent', () => {
  let component: VisulizerBoardComponent;
  let fixture: ComponentFixture<VisulizerBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisulizerBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisulizerBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
