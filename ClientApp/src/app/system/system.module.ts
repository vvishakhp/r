import { NgModule, ModuleWithProviders, InjectionToken } from "@angular/core";
import { FileSystemService } from "./providers/filesystem.service";
import { LocalFileSystemService } from "./providers.local/filesystem.service";
import { EnvironmentService } from "./providers/environment.service";
import { LocalEnvironmentService } from "./providers.local/environment.service";
import { ElectronService } from "./providers.local/electron.service";
import { WindowService } from "./providers/WindowService";
import { LocalWindowService } from "./providers.local/window.service";

@NgModule()
export class SystemModule {
  public static forLocal(): ModuleWithProviders {
    return {
      ngModule: SystemModule,
      providers: [
        ElectronService,
        { provide: FileSystemService, useClass: LocalFileSystemService },
        { provide: EnvironmentService, useClass: LocalEnvironmentService },
        { provide: WindowService, useClass: LocalWindowService }
      ]
    };
  }
}
