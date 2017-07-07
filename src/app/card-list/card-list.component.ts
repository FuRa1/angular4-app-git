import {Component, OnInit} from '@angular/core';
import {Repo} from '../class/repo';
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
                private route: ActivatedRoute,
                private actions: CoreActions) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            if (params['userLogin'] !== undefined) {
                const userLogin = params['userLogin'];
                this.userName = userLogin;
                this.ngRedux.dispatch(this.actions.getReposAsync(userLogin))
            }
        });
    }

}
