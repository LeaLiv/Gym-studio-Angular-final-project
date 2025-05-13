import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrantDetailsDialogComponent } from './registrant-details-dialog.component';

describe('RegistrantDetailsDialogComponent', () => {
  let component: RegistrantDetailsDialogComponent;
  let fixture: ComponentFixture<RegistrantDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrantDetailsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrantDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
