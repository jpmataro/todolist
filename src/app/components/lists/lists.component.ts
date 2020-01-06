import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { List } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @ViewChild(IonList) list: IonList;
  @Input() finished = true;

  constructor( public deseoService: DeseosService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {}

  selectedList ( list: List) {

    if (this.finished) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${ list.id }`)
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${ list.id }`)
    }
  }

  deleteList( list: List ) {
    this.deseoService.deleteList(list);
  }

 async  editList( list: List ) {
    const alert = await this.alertCtrl.create({
      header: 'Editar llista',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: list.titulo,
          placeholder: 'Nom de la llista'
        }
      ],
      buttons: [
        {
          text: 'Cancel·lar',
          role: 'cancel',
          handler: () => {
            this.list.closeSlidingItems();
            console.log('Cancel·lar');
          }
        },
        {
          text: 'Actualitzar',
          handler: (data) => {
            console.log(data);
            if (data.title.length === 0) {
              return;
            }
            list.titulo = data.title;
            this.deseoService.saveStorage();
            this.list.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();
  }

}
