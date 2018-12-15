import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';
import { EnvironmentService, Environment } from './system/providers/environment.service';
import { ThemeService } from './common/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showTitle = true;

  constructor(themeService:ThemeService, private environment: EnvironmentService) {
    console.log('AppConfig', AppConfig);
    this.showTitle = environment.environment === Environment.LOCAL;
  }
}
