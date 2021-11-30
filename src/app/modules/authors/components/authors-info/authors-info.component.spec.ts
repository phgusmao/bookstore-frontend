import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsInfoComponent } from './authors-info.component';

describe('AuthorsInfoComponent', () => {
  let component: AuthorsInfoComponent;
  let fixture: ComponentFixture<AuthorsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
