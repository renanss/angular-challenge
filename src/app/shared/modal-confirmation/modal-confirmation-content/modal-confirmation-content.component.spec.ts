import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmationContentComponent } from './modal-confirmation-content.component';

describe('ModalConfirmationContentComponent', () => {
  let component: ModalConfirmationContentComponent;
  let fixture: ComponentFixture<ModalConfirmationContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmationContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
