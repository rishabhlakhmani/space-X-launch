import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionsComponent } from './components/missions/missions.component';
import { MissionsListResolver } from './resolver/mission-list.resolver';

const routes: Routes = [
    { path: '', redirectTo: 'launches', pathMatch: 'full' },
    { path: 'launches', component: MissionsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        initialNavigation: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
