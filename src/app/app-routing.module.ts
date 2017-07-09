import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {FavoritesComponent} from './favorites/favorites.component';

const routes: Routes = [
    {path: '', redirectTo: '/repos', pathMatch: 'full'},
    {path: 'favorites', component: FavoritesComponent},
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
