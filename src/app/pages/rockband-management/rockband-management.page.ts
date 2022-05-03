import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rockband-management',
  templateUrl: './rockband-management.page.html',
  styleUrls: ['./rockband-management.page.scss'],
})
export class RockbandManagementPage implements OnInit {

  eventsSubject: Subject<any | null> = new Subject<any | null>();
  eventsSubject2 = this.eventsSubject.asObservable();

  constructor() { }

  ngOnInit() {}

  optionsFn(key) {
    this.eventsSubject.next(key);
  }

}
