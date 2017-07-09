import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
// import {CardListComponent} from './card-list/dashboard.component';

const routes: Routes = [
    {path: '', redirectTo: '/repos', pathMatch: 'full'},
    // {path: 'dashboard', component: DashboardComponent},
    {path: 'repos', component: DashboardComponent},
    {path: 'repos/:userLogin', component: DashboardComponent},
    // {path: 'repos/:userLogin/detail/:repoName', component: CardComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
