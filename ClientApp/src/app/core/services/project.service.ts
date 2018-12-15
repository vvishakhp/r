import { Injectable } from "@angular/core";
import { Project } from "../models/Project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor() {

  }

  public async getAllProjects(): Promise<Project[]>{
    let projects: Project[] = [
      { name: 'Project 1', lastModified: 2, user: 'Vishakh' },
      { name: 'Project 2', lastModified: 10, user: 'Aravind' },
      { name: 'Project 3', lastModified: 20, user: 'Akhil' },
    ];
    return Promise.resolve(projects);
  }
}
