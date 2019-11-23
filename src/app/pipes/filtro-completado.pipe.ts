import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(lists: List[], complete: boolean = true): List[] {

    return lists.filter(list => list.terminada === complete);

  }

}
