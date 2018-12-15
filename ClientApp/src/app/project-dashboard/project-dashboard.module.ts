import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDashboardRoutingModule } from './project-dashboard-routing.module';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListComponent } from './components/list/list.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [SideBarComponent, DashboardComponent, ListComponent],
  imports: [
    CommonModule,
    ProjectDashboardRoutingModule,
    CoreModule
  ],
  exports: [DashboardComponent]
})
export class ProjectDashboardModule { }
