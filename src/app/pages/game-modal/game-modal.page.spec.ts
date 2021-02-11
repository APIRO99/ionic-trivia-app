import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameModalPage } from './game-modal.page';

describe('GameModalPage', () => {
  let component: GameModalPage;
  let fixture: ComponentFixture<GameModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
