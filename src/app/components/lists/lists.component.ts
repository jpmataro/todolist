import { Component, OnInit, Input } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { List } from 'src/app/models/lista.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() finished = true;

  constructor( public deseoService: DeseosService,
              private router: Router) { }

  ngOnInit() {}

  selectedList ( list: List) {

    if (this.finished) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${ list.id }`)
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${ list.id }`)
    }
  }

  deleteList ( list: List ) {
    this.deseoService.deleteList(list);
  }

}
