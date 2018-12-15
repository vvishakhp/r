import { Observable } from "rxjs";
import { ElectronService } from "../providers.local/electron.service";
import { BrowserWindow } from 'electron';

export abstract class EnvironmentService {
  public environment: Environment;
  public electron: ElectronService;
}

export enum Environment {
    LOCAL, WEB
}
