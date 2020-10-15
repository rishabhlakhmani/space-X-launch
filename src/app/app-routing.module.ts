import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionsComponent } from './components/missions/missions.component';

const routes: Routes = [
    { path: '', redirectTo: 'launches', pathMatch: 'full' },
    { path: 'launches', component: MissionsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        initialNavigation: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
