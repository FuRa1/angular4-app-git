import {Component, OnInit} from '@angular/core';
import {Repo} from '../class/repo';
import {ReposService} from '../repos.service';
import {ActivatedRoute, ParamMap } from '@angular/router';
import {Router} from '@angular/router';

@Component({
    selector: 'app-card-list',
    template: `
        <div>
            <h3>{{userName}}</h3>
            <ul class="heroes" *ngIf="repos">
                <li *ngFor="let repo of repos">
                    {{repo.id}}
                    {{repo.name}}
                    {{repo.full_name}}
                    {{repo.html_url}}
                </li>
            </ul>
            <div *ngIf="empty && !warn">No repositories</div>
            <div *ngIf="warn">{{warnMessage}}</div>
        </div>
    `,
    styles: []
})
export class CardListComponent implements OnInit {
    repos: Repo[];
    warn = false;
    empty = false;
    warnMessage: string;
    userName: string;

    constructor(private reposService: ReposService,
                private route: ActivatedRoute) {
    }

    findRepos(): void {
        this.route.params.subscribe(params => {
            if (params['userLogin'] !== undefined) {
                const userLogin = params['userLogin'];
                this.userName = userLogin;
                this.reposService.getRepos(userLogin)
                    .then(repos => {
                        this.empty = repos.length === 0;
                        this.warn = false;
                        this.repos = repos
                    })
                    .catch(error => {
                        this.warn = true;
                        this.empty = false;
                        this.repos = [];
                        this.warnMessage = error.statusText
                    });
            }
        });
    }

    ngOnInit(): void {
        this.findRepos();
    }

    // goBack(): void {
    //     this.location.back();
    // }

}
