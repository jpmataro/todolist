import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  constructor(public deseoService: DeseosService,
              private router: Router,
              private alertCtrl: AlertController) {}

  async addList() {

      const alert = await this.alertCtrl.create({
        header: 'Nova llista',
        inputs: [
          {
            name: 'title',
            type: 'text',
            placeholder: 'Nom de la llista'
          }
        ],
        buttons: [
          {
            text: 'Cancel·lar',
            role: 'cancel',
            handler: () => {
              console.log("Cancel·lar");
            }
          },
          {
            text: 'Crear',
            handler: (data) => {
              console.log(data);
              if (data.title.length === 0) {
                return;
              }
              const listId = this.deseoService.createList(data.title);
              this.router.navigateByUrl(`/tabs/tab1/agregar/${listId}`);
            }
          }
        ]
      });

      alert.present();
  }
}
