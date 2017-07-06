import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule, MdButtonModule, MdMenuModule, MdCardModule} from '@angular/material';

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {CardComponent} from './card/card.component';
import {CardListComponent} from './card-list/card-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {ReposService} from './repos.service';
import {SearchComponent} from './search/search.component';
import {DetailComponent} from './detail/detail.component';
import { NavbarComponent } from './navbar/navbar.component';


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
    ],
    providers: [ReposService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
