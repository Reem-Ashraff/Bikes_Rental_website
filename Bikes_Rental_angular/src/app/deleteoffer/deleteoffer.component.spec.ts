import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteofferComponent } from './deleteoffer.component';

describe('DeleteofferComponent', () => {
  let component: DeleteofferComponent;
  let fixture: ComponentFixture<DeleteofferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteofferComponent]
    });
    fixture = TestBed.createComponent(DeleteofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
