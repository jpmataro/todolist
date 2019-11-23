import { Component, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/models/lista.model';
import { listItem } from 'src/app/models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  list: List;
  nameItem = '';

  constructor(private deseosService: DeseosService,
              private route: ActivatedRoute) {

    const listId = this.route.snapshot.paramMap.get('listId');
    this.list = this.deseosService.getLists(listId);
  }

  ngOnInit() {
  }

  addItem() {

    if (this.nameItem.length === 0) {
      return;
    }

    const newItem = new listItem(this.nameItem);
    this.list.items.push(newItem);
    this.nameItem = '';
    this.deseosService.saveStorage();
  }

  changeCheck(item: listItem) {

    const pendingElements = this.list.items
                                .filter( itemData => !itemData.completado)
                                .length;

    if (pendingElements === 0) {
      this.list.terminadaEnd = new Date();
      this.list.terminada = true;
    } else {
      this.list.terminadaEnd = null;
      this.list.terminada = false;
    }

    this.deseosService.saveStorage();
  }

  deleteItem(i: number) {
    this.list.items.splice(i,1);
    this.deseosService.saveStorage();
  }

}
