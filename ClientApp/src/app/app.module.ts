import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { WebviewDirective } from './webview.directive';
import { AppComponent } from './app.component';
import { RpaCommonModule } from './common/common.module';
import { SystemModule } from './system/system.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WebviewDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RpaCommonModule,
    SystemModule.forLocal(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
