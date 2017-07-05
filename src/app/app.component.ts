import {Component} from '@angular/core';
import {ReposService} from './repos.service';
import {Router} from '@angular/router';
import {Repo} from './class/repo'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Angular4 gitHub repos';
    userLogin = '';

    constructor(private router: Router) {}

    goToCardList(userLogin: string): void {
        if (userLogin && userLogin.length > 0) {
            this.router.navigate(['/repos', userLogin]);
        }
    }

    gotoDetailRepo(id: number): void {
        this.router.navigate(['/detail', id]);
    }
}
