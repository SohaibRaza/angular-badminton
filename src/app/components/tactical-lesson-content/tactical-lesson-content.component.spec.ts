import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TacticalLessonContentComponent } from './tactical-lesson-content.component';

describe('TacticalLessonContentComponent', () => {
  let component: TacticalLessonContentComponent;
  let fixture: ComponentFixture<TacticalLessonContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacticalLessonContentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TacticalLessonContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
