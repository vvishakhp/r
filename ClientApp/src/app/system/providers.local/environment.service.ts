import { EnvironmentService, Environment } from "../providers/environment.service";
import { Injectable } from "@angular/core";
import { ElectronService } from "./electron.service";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocalEnvironmentService extends EnvironmentService {

  public constructor(public electron: ElectronService) {
    super();
    this.environment = Environment.LOCAL;
  }

  public close() {
    this.electron.remote.BrowserWindow.getFocusedWindow().close();
  }
  public minimize() {
    this.electron.remote.BrowserWindow.getFocusedWindow().minimize();
  }
  public maximize() {
    this.electron.remote.BrowserWindow.getFocusedWindow().maximize();
  }
  public restore() {
    this.electron.remote.BrowserWindow.getFocusedWindow().restore();
  }
}
