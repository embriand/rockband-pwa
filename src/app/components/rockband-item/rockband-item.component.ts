import { Component, OnInit } from '@angular/core';

import { IRockband } from '../../interfaces/rockband';

@Component({
  selector: 'app-rockband-item',
  templateUrl: './rockband-item.component.html',
  styleUrls: ['./rockband-item.component.scss'],
})
export class RockbandItemComponent implements OnInit {

  private rockband: IRockband;

  constructor() { }

  ngOnInit() {}

}
