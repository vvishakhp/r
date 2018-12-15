import { Injectable } from "@angular/core";
import { AppConfig } from '../../../environments/environment';
@Injectable()
export class ThemeService {
    private linkElement: HTMLLinkElement;
    private scriptElement: HTMLScriptElement;

    public constructor() {
        this.linkElement = document.createElement('link');
        this.scriptElement = document.createElement('script');

        this.linkElement.rel = "stylesheet";
        document.head.appendChild(this.linkElement);
        document.body.appendChild(this.scriptElement);

        this.loadTheme("default_theme");
    }

    public loadTheme(themeName: string) {
        if (AppConfig.production) {
            this.linkElement.href = themeName + '.css';
        }else{
            this.scriptElement.src = themeName + '.js';
        }
    }
}