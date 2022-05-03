import { Component, OnInit, AfterContentInit, NgZone, Input, ViewChild, Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import { Router } from '@angular/router';
import { ViewWillEnter, ToastController } from '@ionic/angular';

import { ApiService } from '../../services/api.service';
import { ApiInfinitScrollService } from '../../services/api-infinit-scroll.service';

@Component({
  selector: 'app-rockband-infinitscroll-list',
  templateUrl: './rockband-infinitscroll-list.component.html',
  styleUrls: ['./rockband-infinitscroll-list.component.scss'],
})
export class RockbandInfinitscrollListComponent implements OnInit, AfterContentInit {

  @Input()
  keyFilter: Observable<any>;

  keyValue = 'name';
  pageNumber = 1;
  pageLimit = 5;

  rockbandsItems: any = [];
  public name = 'Parameters to define';

  constructor(
    private router: Router,
    private zone: NgZone,
    private apiInfinitScrollService: ApiInfinitScrollService,
    private apiService: ApiService,
    public toastController: ToastController) {    }

  ngOnInit() {

    this.keyFilter.subscribe( (data) => {

      this.keyValue = data;

      this.loadRockBands(false, '');

    });

    this.loadRockBands(false, '');
  }

  ngAfterContentInit() {
    console.log(this.keyFilter);
  }

  loadRockBands(isFirstLoad, event) {

    const args = `?limit=${this.pageLimit}&offset=${this.pageNumber}&sortBy=${this.keyValue}`;

    this.apiInfinitScrollService.getRockbands(args).subscribe((response) => {
      this.rockbandsItems = response;

      if(isFirstLoad) {
        event.target.complete();
      }

      this.pageNumber++;
    }, error => {
      console.log(error);
    });

  }

  loadMoreRockBand(event) {
    this.loadRockBands(true, event);
  }

   /**
   * Present Toast
   *
   * @param rockband
   * @param i
   */
    async presentToastWithOptions(rockband, event) {
      const that = this;
      const toast = await this.toastController.create({
        message: 'Souhaitez-vous supprimer ce groupe ?',
        position: 'top',
        color: 'danger',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              // Nothing to handle
            }
          }, {
            text: 'Oui',
            handler: () => {
              this.apiService.deleteRockband(rockband.id)
              .subscribe(() => {
                that.loadRockBands(false, '');
                that.rockbandsItems.filter(item => item.id !== rockband.id);
                }
              );
            }
          }
        ]
      });
      toast.present();
    }

    deleteRockband(rockband, event) {
      this.presentToastWithOptions(rockband, event);
    }

}
