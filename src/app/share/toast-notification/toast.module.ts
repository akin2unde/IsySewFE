import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { OverlayModule } from "@angular/cdk/overlay";
import { ToastComponent } from "./toast.component";
import { defaultToastConfig, TOAST_CONFIG_TOKEN } from "./toast-configs";
import { NbActionsModule, NbButtonModule, NbIconModule } from "@nebular/theme";
// import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [OverlayModule,NbIconModule,NbActionsModule,NbButtonModule, CommonModule],
  declarations: [ToastComponent],
  entryComponents: [ToastComponent]
})
export class ToastModule {
  public static forRoot(config = defaultToastConfig): ModuleWithProviders<ToastModule> {
    return {
      ngModule: ToastModule,
      providers: [
        {
          provide: TOAST_CONFIG_TOKEN,
          useValue: { ...defaultToastConfig, ...config }
        }
      ]
    };
  }
}
