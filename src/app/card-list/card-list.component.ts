import {Component, OnInit} from '@angular/core';
import {Repo} from '../class/repo';
import {Warning} from '../class/warn';
import {ReposService} from '../repos.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';

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
                        this.warn = false;
                        this.repos = repos
                    })
                    .catch(error => {
                        this.warn = true;
                        this.repos = [];
                        this.warnMessage = error;
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
