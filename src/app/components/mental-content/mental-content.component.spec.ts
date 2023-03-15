import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MentalContentComponent } from './mental-content.component';

describe('MentalContentComponent', () => {
  let component: MentalContentComponent;
  let fixture: ComponentFixture<MentalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentalContentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MentalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
