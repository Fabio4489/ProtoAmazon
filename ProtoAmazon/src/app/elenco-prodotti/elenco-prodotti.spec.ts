import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoProdotti } from './elenco-prodotti';

describe('ElencoProdotti', () => {
  let component: ElencoProdotti;
  let fixture: ComponentFixture<ElencoProdotti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElencoProdotti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElencoProdotti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
