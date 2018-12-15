import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'Projects', loadChildren: './project-dashboard/project-dashboard.module#ProjectDashboardModule' },
    {path:'**', redirectTo:'Projects'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
