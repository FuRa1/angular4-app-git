import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {CardComponent} from './card/card.component';
import {CardListComponent} from './card-list/card-list.component';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    // {path: 'detail/:id', component: CardComponent},
    {path: 'repos/:userLogin', component: CardListComponent},
    // {path: 'repos/:userLogin/detail/:repoName', component: CardComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
