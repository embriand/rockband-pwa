import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-rockband-list',
  templateUrl: './rockband-list.page.html',
  styleUrls: ['./rockband-list.page.scss'],
})
export class RockbandListPage implements OnInit {

  Rockbands: any = [];

  constructor(
    private apiService: ApiService,
    private router: Router,
    public toastController: ToastController) { }

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

  ngOnInit() {}

  ionViewDidEnter() {
    this.apiService.getRockbands().subscribe((response) => {
      this.Rockbands = response;

      console.log(this.Rockbands);
    });
  }

  deleteRockband(rockband, i) {
    this.presentToastWithOptions(rockband, i);
  }
}
