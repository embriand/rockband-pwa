import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ToastController } from '@ionic/angular';

import { IRockband2 } from '../../interfaces/rockband';

@Component({
  selector: 'app-rockband-new',
  templateUrl: './rockband-new.page.html',
  styleUrls: ['./rockband-new.page.scss'],
})
export class RockbandNewPage implements OnInit {

  newRockbandFormFg: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private zone: NgZone,
    public toastController: ToastController
  ) {
    //this.newRockbandFormFg = this.generateDataForm();
  }

  /**
   * Present Toast
   *
   * @param msg
   * @param type
   */
  async presentToast(msg: string, type: number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top',
      color: type === 1 ? 'success' : 'danger'
    });
    toast.present();
  }

  ngOnInit() {

    this.newRockbandFormFg = this.formBuilder.group({
      name: [''],
      country: [''],
      city: [''],
      startYear: [''],
      endYear: [''],
      founders: [''],
      members: [''],
      genre: [''],
      bio: ['']
    });
  }

  onSubmit() {
    if (!this.newRockbandFormFg.valid) {
      const msgFormNotValidated = 'Veuillez vérifier les informations saisies !';
      this.presentToast(msgFormNotValidated, 2).then( () => {});
      return false;
    } else {
      this.apiService.addRockband(this.newRockbandFormFg.value)
        .subscribe((response) => {
          console.log(response);
          if(response) {
            const msgFormValidated = 'Le groupe de rock a été créé';

            this.presentToast(msgFormValidated, 1).then( () => {
              this.zone.run(() => {
                this.newRockbandFormFg.reset();
                this.router.navigate(['/rockband-management']);
              });
            });
          }
        });
    }
  }

  /**
   * Generate Data Form
   *
   * @returns
   */
  private generateDataForm() {
    const data = this.formBuilder.group({
      name: [''],
      country: [''],
      city: [''],
      startYear: [''],
      endYear: [''],
      founders: [''],
      members: [''],
      genre: [''],
      bio: ['']
    });
    return data;
  }

}
