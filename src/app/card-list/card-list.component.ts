import {Component, OnInit} from '@angular/core';
import {Repo} from '../class/repo';
import {ReposService} from '../repos.service';
import {ActivatedRoute} from '@angular/router';

import {Observable} from 'rxjs/Observable';

import {NgRedux, select} from '@angular-redux/store';
import {CoreActions} from '../app.actions';
import {IAppState} from '../app.store';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  repos: Repo[];
  userName: string;
  @select() readonly repos$: Observable<Repo[]>;

  constructor(private ngRedux: NgRedux<IAppState>,
              private reposService: ReposService,
              private route: ActivatedRoute,
              private actions: CoreActions) {
    // ngRedux.mapDispatchToTarget((dispatch) => {
    //   return {
    //     login: (credentials) => dispatch(
    //       this.sessionActions.loginUser(credentials)),
    //     logout: () => dispatch(
    //       this.sessionActions.logoutUser())
    //   };
    // })(this);
  }

  findRepos(userName) {
    this.ngRedux.dispatch(this.actions.findRepos(userName));
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
  }

}
