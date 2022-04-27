import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ToastController } from '@ionic/angular';

import { IRockband } from '../../interfaces/rockband';

@Component({
  selector: 'app-rockband-update',
  templateUrl: './rockband-update.page.html',
  styleUrls: ['./rockband-update.page.scss'],
})
export class RockbandUpdatePage implements OnInit {

  updateRockbandFormFg: FormGroup;
  id: any;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router,
    public toastController: ToastController
  ) { }

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

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.fetchRockband(this.id);
    this.updateRockbandFormFg = this.formBuilder.group({
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

  /**
   * Fetch Rock Band
   *
   * @param id
   */
  private fetchRockband(id) {
    this.apiService.getRockband(id).subscribe((data) => {
      this.updateRockbandFormFg.setValue({
        name: data['name'],
        country: data['country'],
        city: data['city'],
        startYear: data['startYear'],
        endYear: data['endYear'],
        founders: data['founders'],
        members: data['members'],
        genre: data['genre'],
        bio: data['bio']
        });
    });
  }

  private onSubmit() {

    const msgFormValidated = 'Le groupe de rock a été enregistré';
    const msgFormNotValidated = 'Veuillez vérifier les informations saisies !';

    if (!this.updateRockbandFormFg.valid) {
      this.presentToast(msgFormNotValidated, 2).then( () => {});
      return false;
    } else {
      this.presentToast(msgFormValidated, 1).then( () => {
        this.apiService.updateRockband(this.id, this.updateRockbandFormFg.value)
        .subscribe(() => {
          this.updateRockbandFormFg.reset();
          this.router.navigate(['/rockband-list']);
        });
      });
    }
  }

  private back(): void {
    this.router.navigate(['/rockband-list']);
  }

}
