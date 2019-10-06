import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista [] = [];

  constructor() {
    const item1 = new Lista("Item1");
    const item2 = new Lista("Item2");

    this.listas.push(item1, item2);
  }

}
