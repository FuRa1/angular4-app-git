import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import 'hammerjs';
import 'whatwg-fetch';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule, MdButtonModule, MdMenuModule, MdCardModule} from '@angular/material';

// components

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {CardComponent} from './card/card.component';
import {CardListComponent} from './card-list/card-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {ReposService} from './repos.service';
import {SearchComponent} from './search/search.component';
import {DetailComponent} from './detail/detail.component';
import {NavbarComponent} from './navbar/navbar.component';


// redux
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { IAppState } from './app.store';
import thunk from 'redux-thunk';
import { coreReducer } from './app.reducer';
import { CoreActions } from './app.actions';

import { Store, createStore, applyMiddleware} from 'redux';

export const store = createStore(
  coreReducer,
  applyMiddleware(thunk)
) as Store<IAppState>;


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CardComponent,
    CardListComponent,
    DashboardComponent,
    SearchComponent,
    DetailComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    NgReduxModule,
  ],
  providers: [ReposService, CoreActions],
  bootstrap: [AppComponent]
})




export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
