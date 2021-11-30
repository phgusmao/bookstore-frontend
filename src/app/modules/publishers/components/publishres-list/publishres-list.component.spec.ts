import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishresListComponent } from './publishres-list.component';

describe('PublishresListComponent', () => {
  let component: PublishresListComponent;
  let fixture: ComponentFixture<PublishresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishresListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
