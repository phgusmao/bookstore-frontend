import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresInfoComponent } from './genres-info.component';

describe('GenresInfoComponent', () => {
  let component: GenresInfoComponent;
  let fixture: ComponentFixture<GenresInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenresInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
