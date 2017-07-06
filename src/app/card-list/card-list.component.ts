import {Component, OnInit} from '@angular/core';
import {Repo} from '../class/repo';
import {Warning} from '../class/warn';
import {ReposService} from '../repos.service';
import {ActivatedRoute} from '@angular/router';

import {Observable} from 'rxjs/Observable';

import {NgRedux, select} from '@angular-redux/store';
import {CounterActions} from '../app.actions';
import {IAppState} from '../store';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  repos: Repo[];
  warn = false;
  warnMessage: Warning;
  userName: string;
  @select() readonly count$: Observable<number>;
  @select() readonly repos$: Observable<Repo[]>;

  constructor(private ngRedux: NgRedux<IAppState>,
              private reposService: ReposService,
              private route: ActivatedRoute,
              private actions: CounterActions) {
  }

  increment() {
    this.ngRedux.dispatch(this.actions.increment()); // <- New
  }

  decrement() {
    this.ngRedux.dispatch(this.actions.decrement()); // <- New
  }

  findRepos(userName) {
    this.ngRedux.dispatch(this.actions.findRepos(userName)); // <- New
  }

  // findRepos(): void {
  //   this.route.params.subscribe(params => {
  //     if (params['userLogin'] !== undefined) {
  //       const userLogin = params['userLogin'];
  //       this.userName = userLogin;
  //       this.reposService.getRepos(userLogin)
  //         .then(repos => {
  //           this.warn = false;
  //           this.repos = repos
  //         })
  //         .catch(error => {
  //           this.warn = true;
  //           this.repos = [];
  //           this.warnMessage = error;
  //         });
  //     }
  //   });
  // }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['userLogin'] !== undefined) {
        const userLogin = params['userLogin'];
        this.userName = userLogin;
        this.findRepos(userLogin);
      }
    });
    // this.findRepos();
  }

  // goBack(): void {
  //     this.location.back();
  // }

}
