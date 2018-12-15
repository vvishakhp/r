import { Component, OnInit } from '@angular/core';
import { EnvironmentService, Environment } from '../../system/providers/environment.service';
import { WindowService, WindowState } from '../../system/providers/WindowService';

@Component({
  selector: 'rpa-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {

  public maximized = false;
  public displayName = "Display Name";

  constructor(private environment: EnvironmentService, private _window: WindowService) {
    console.log(_window);
  }

  ngOnInit() {
    this._window.windowState.subscribe(state => this.maximized = state !== WindowState.RESTORED);
  }

  close() {
    this._window.close();
  }

  minimize() {
    this._window.minimize();
    console.log('Minimize');
  }

  maximize() {
    this._window.maximize();
  }

  restore() {
    this._window.restore();
  }
}
