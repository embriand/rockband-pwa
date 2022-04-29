import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { ApiService } from '../../services/api.service';
import { ApiInfinitScrollService } from '../../services/api-infinit-scroll.service';

@Component({
  selector: 'app-rockband-list',
  templateUrl: './rockband-list.page.html',
  styleUrls: ['./rockband-list.page.scss'],
})
export class RockbandListPage implements OnInit {

  rockbands: any = [];
  public name = 'Parameters to define';

  constructor(    private router: Router,
    private apiInfinitScrollService: ApiInfinitScrollService,
    private apiService: ApiService,
    public toastController: ToastController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.apiInfinitScrollService.getRockbands().subscribe((response) => {
      this.rockbands = response;
    });
  }

  loadRockBands() {
    this.apiInfinitScrollService.getRockbands().subscribe((response) => {
      this.rockbands = response;
    });
  }

   /**
   * Present Toast
   *
   * @param rockband
   * @param i
   */
    async presentToastWithOptions(rockband, i) {
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
                  this.ionViewDidEnter();
                  console.log('Rock Band deleted!');
                }
              );
            }
          }
        ]
      });
      toast.present();
    }

    deleteRockband(rockband, i) {
      this.presentToastWithOptions(rockband, i);
    }
    

/** */


    /**loadMoreRockBand(event) {

      this.page++;
  
      // let more = "&sortBy=name";
      const args = `?limit=2&offset=${this.page}&sortBy=name`;
  
      this.loadRockBands(event, args);
  
      if(this.page >= this.max) {
        event.target.disabled = true;
      }
    } */
}
