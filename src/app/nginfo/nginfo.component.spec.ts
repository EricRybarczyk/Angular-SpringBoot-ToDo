import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NginfoComponent } from './nginfo.component';

describe('NginfoComponent', () => {
  let component: NginfoComponent;
  let fixture: ComponentFixture<NginfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NginfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NginfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
