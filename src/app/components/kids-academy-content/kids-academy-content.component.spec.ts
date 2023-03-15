import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KidsAcademyContentComponent } from './kids-academy-content.component';

describe('KidsAcademyContentComponent', () => {
  let component: KidsAcademyContentComponent;
  let fixture: ComponentFixture<KidsAcademyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsAcademyContentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KidsAcademyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
