import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahAlatComponent } from './tambah-alat.component';

describe('TambahAlatComponent', () => {
  let component: TambahAlatComponent;
  let fixture: ComponentFixture<TambahAlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahAlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahAlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
