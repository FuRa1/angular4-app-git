import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  userLogin = '';

  constructor(private router: Router) {}

  goToCardList(userLogin: string): void {
    if (userLogin && userLogin.length > 0) {
      this.router.navigate(['/repos', userLogin]);
    }
  }

  ngOnInit() {
  }

}