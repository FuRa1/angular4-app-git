import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NgRedux, select} from '@angular-redux/store';
import {IAppState} from '../app.store';
import {Repo} from '../class/repo';

@Component({
    selector: 'app-inform',
    templateUrl: './inform.component.html',
    styleUrls: ['./inform.component.css']
})
export class InformComponent implements OnInit {

    @select() readonly repos$: Observable<Repo[]>;
    @select() readonly errorMessage$: Observable<String>;
    @select() readonly errorOccurs$: Observable<Boolean>;
    @select() readonly isPending$: Observable<Boolean>;
    @select() readonly isEmpty$: Observable<Boolean>;

    constructor(private ngRedux: NgRedux<IAppState>) {
    }

    ngOnInit() {
    }

}
