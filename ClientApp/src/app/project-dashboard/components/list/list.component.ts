import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../core/services/project.service';
import { Project } from '../../../core/models/Project';

@Component({
  selector: 'rpa-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public allProjects: Project[];

  public projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    let getProjects = async () => {
      this.allProjects = await this.projectService.getAllProjects();
      this.projects = [...this.allProjects];
    };
    getProjects();
  }

}
