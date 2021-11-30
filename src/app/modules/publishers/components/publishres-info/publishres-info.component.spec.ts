import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishresInfoComponent } from './publishres-info.component';

describe('PublishresInfoComponent', () => {
  let component: PublishresInfoComponent;
  let fixture: ComponentFixture<PublishresInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishresInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishresInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
