import { Injectable } from '@angular/core';
import { WindowService, WindowState } from '../providers/WindowService';
import { ElectronService } from './electron.service';
import { BrowserWindow } from 'electron';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LocalWindowService extends WindowService {
  private _windowState = new BehaviorSubject<WindowState>(WindowState.RESTORED);
  private mainWindow: BrowserWindow;

  constructor(private electron: ElectronService) {
    super();
    console.log(this);
    this.windowState = this._windowState.asObservable();
    this.mainWindow = electron.remote.BrowserWindow.getAllWindows()[0];
    this.mainWindow.on("maximize", () => this._windowState.next(WindowState.MAXIMIZED));
    this.mainWindow.on("minimize", () => this._windowState.next(WindowState.MINIMIZED));
    this.mainWindow.on("restore", () => this._windowState.next(WindowState.RESTORED));
    this.mainWindow.on("moved", () => this._windowState.next(WindowState.RESTORED));
    this.mainWindow.on("resize", () => this._windowState.next(WindowState.RESTORED));
  }

  public getMainWindow(): Electron.BrowserWindow {
    return this.mainWindow;
  }

  public minimize() {
    this.mainWindow.minimize();
  }

  public maximize() {
    this.mainWindow.maximize();
  }

  public restore() {
    this.mainWindow.restore();
  }

  public close() {
    this.mainWindow.close();
  }
}
