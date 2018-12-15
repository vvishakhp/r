import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { SystemModule } from '../system/system.module';
import { ThemeService } from './services/theme.service';


@NgModule({
  declarations: [
    TitleBarComponent
  ],
  imports: [CommonModule],
  exports: [TitleBarComponent],
  providers:[ThemeService]
})
export class RpaCommonModule { }
