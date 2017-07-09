import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule, MdButtonModule, MdMenuModule, MdCardModule} from '@angular/material';

// tools

import 'hammerjs'; // some part of @angular/material, dunno actually why :D

// components

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {SearchComponent} from './search/search.component';
import {DetailComponent} from './detail/detail.component';
import {NavbarComponent} from './navbar/navbar.component';


// redux moves
import {NgReduxModule, NgRedux} from '@angular-redux/store';
import {Store, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {IAppState, INITIAL_STATE } from './app.store';
import {coreReducer} from './app.reducer';
import {CoreActions} from './app.actions';
import { InformComponent } from './inform/inform.component';
import { ListComponent } from './list/list.component';


export const store = createStore(
    coreReducer,
    INITIAL_STATE,
    applyMiddleware(thunk),
) as Store<IAppState>;


@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        DashboardComponent,
        SearchComponent,
        DetailComponent,
        NavbarComponent,
        InformComponent,
        ListComponent,
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
    providers: [CoreActions],
    bootstrap: [AppComponent]
})

export class AppModule {
    constructor(ngRedux: NgRedux<IAppState>) {
        ngRedux.provideStore(store);
    }
}
