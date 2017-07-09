import {Component, OnInit} from '@angular/core';
import {Repo} from '../class/repo';
import {ActivatedRoute} from '@angular/router';

import {Observable} from 'rxjs/Observable';

import {NgRedux, select} from '@angular-redux/store';
import {CoreActions} from '../app.actions';
import {IAppState} from '../app.store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  repos: Repo[];
  userName: string;
  @select() readonly repos$: Observable<Repo[]>;
  @select() readonly favorites$: Observable<Repo[]>;

  constructor(private ngRedux: NgRedux<IAppState>,
              private route: ActivatedRoute,
              private actions: CoreActions) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['userLogin'] !== undefined) {
        const userLogin = params['userLogin'];
        this.userName = userLogin; // maybe add to storage?
        this.ngRedux.dispatch(this.actions.getReposAsync(userLogin))
      }
    });
  }


  addFavorites(id): void {
    console.log(id);
    this.ngRedux.dispatch(this.actions.addFavorites(id))
  }
  removeFavorites(id): void {
    console.log(id);
    this.ngRedux.dispatch(this.actions.removeFavorites(id))
  }
}
