import { Component, OnInit } from '@angular/core';
import {Repo} from '../class/repo';

import {Observable} from 'rxjs/Observable';

import {NgRedux, select} from '@angular-redux/store';
import {CoreActions} from '../app.actions';
import {IAppState} from '../app.store';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  @select() readonly favorites$: Observable<Repo[]>;

  constructor(private ngRedux: NgRedux<IAppState>,
              private actions: CoreActions) {
  }

  removeFavorites(id): void {
    this.ngRedux.dispatch(this.actions.removeFavorites(id))
  }
  ngOnInit() {
    // this.ngRedux.dispatch(this.actions.getFavoritesReposAsync())
  }

}
