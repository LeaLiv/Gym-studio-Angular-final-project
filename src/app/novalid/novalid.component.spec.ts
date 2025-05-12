import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovalidComponent } from './novalid.component';

describe('NovalidComponent', () => {
  let component: NovalidComponent;
  let fixture: ComponentFixture<NovalidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovalidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
