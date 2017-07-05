import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
    userLogin: string;
    constructor(private router: Router, private route: ActivatedRoute) {
    }

    goToCardList(userLogin: string): void {
        if (userLogin && userLogin.length > 0) {
            this.router.navigate(['/repos', userLogin]);
        }
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            if (params['userLogin'] !== undefined) {
                this.userLogin = params['userLogin'];
            }
        });
    }
}
