import { Injectable } from '@angular/core';
import { List } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  lists: List [] = [];

  constructor() {
    this.loadStorage();
  }

  createList(title: string) {
    const newItem = new List(title);
    this.lists.push(newItem);
    this.saveStorage();

    return newItem.id;
  }

  deleteList( list: List ) {
    this.lists = this.lists.filter( dataList => dataList.id !== list.id );
    this.saveStorage();
  }

  getLists(id: string | number) {
    id = Number(id);

    return this.lists.find(listData => listData.id === id );
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  loadStorage() {
    if (localStorage.getItem('data')) {
      this.lists = JSON.parse(localStorage.getItem('data'));
    } else {
      this.lists = [];
    }
  }

}
