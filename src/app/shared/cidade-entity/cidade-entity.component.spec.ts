import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeEntityComponent } from './cidade-entity.component';

describe('CidadeEntityComponent', () => {
  let component: CidadeEntityComponent;
  let fixture: ComponentFixture<CidadeEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadeEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
