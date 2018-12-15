import { Observable, BehaviorSubject } from "rxjs";
import { BrowserWindow } from "electron";

export abstract class WindowService {
  public windowState: Observable<WindowState>;

  public abstract getMainWindow(): BrowserWindow;

  public abstract minimize();
  public abstract maximize();
  public abstract restore();
  public abstract close();

}

export enum WindowState {
  MINIMIZED, MAXIMIZED, RESTORED
}
