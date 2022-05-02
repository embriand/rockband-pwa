import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rockband-list',
  templateUrl: './rockband-list.page.html',
  styleUrls: ['./rockband-list.page.scss'],
})
export class RockbandListPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter() {

  }
}
