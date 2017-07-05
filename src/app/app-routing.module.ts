import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {CardComponent} from './card/card.component';
import {CardListComponent} from './card-list/card-list.component';

const routes: Routes = [
    {path: '', redirectTo: '/repos', pathMatch: 'full'},
    {path: 'repos', component: DashboardComponent},
    // {path: 'detail/:id', component: CardComponent},
    {path: 'repos/:userLogin', component: CardListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
