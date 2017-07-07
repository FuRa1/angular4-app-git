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
    }

    initRepos(userName): void {
        this.ngRedux.dispatch(this.actions.pendingRepos());
        this.reposService.getRepos(userName)
            .then(repos => {
                if (repos.length > 0) {
                    this.ngRedux.dispatch(this.actions.setRepos(repos));
                } else {
                    this.ngRedux.dispatch(this.actions.emptyRepos());
                }
            })
            .catch(error => {
                this.ngRedux.dispatch(this.actions.errorRepos(error.statusText));
            });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            if (params['userLogin'] !== undefined) {
                const userLogin = params['userLogin'];
                this.userName = userLogin;
                this.initRepos(userLogin);
            }
        });
    }

}
