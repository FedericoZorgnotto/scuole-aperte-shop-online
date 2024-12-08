import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinePageComponent } from './ordine-page.component';

describe('OrdinePageComponent', () => {
  let component: OrdinePageComponent;
  let fixture: ComponentFixture<OrdinePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdinePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
