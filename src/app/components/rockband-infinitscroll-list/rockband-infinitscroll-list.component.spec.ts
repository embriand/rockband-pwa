import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RockbandInfinitscrollListComponent } from './rockband-infinitscroll-list.component';

describe('RockbandInfinitscrollListComponent', () => {
  let component: RockbandInfinitscrollListComponent;
  let fixture: ComponentFixture<RockbandInfinitscrollListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RockbandInfinitscrollListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RockbandInfinitscrollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
