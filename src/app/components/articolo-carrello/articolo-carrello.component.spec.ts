import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticoloCarrelloComponent } from './articolo-carrello.component';

describe('ArticoloCarrelloComponent', () => {
  let component: ArticoloCarrelloComponent;
  let fixture: ComponentFixture<ArticoloCarrelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticoloCarrelloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticoloCarrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
