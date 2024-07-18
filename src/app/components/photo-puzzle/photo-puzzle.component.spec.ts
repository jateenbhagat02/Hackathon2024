import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPuzzleComponent } from './photo-puzzle.component';

describe('PhotoPuzzleComponent', () => {
  let component: PhotoPuzzleComponent;
  let fixture: ComponentFixture<PhotoPuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoPuzzleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
