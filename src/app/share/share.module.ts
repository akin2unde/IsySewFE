import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ModuleWithProviders } from "@angular/core";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbIconLibraries, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbMenuModule, NbRadioModule, NbSearchModule, NbSelectModule, NbStatusService, NbTabsetModule, NbThemeModule, NbUserModule } from "@nebular/theme";
import { ToastModule } from "./toast-notification";
@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    // TranslateModule,
    FormsModule,
    HttpClientModule,
    NbMenuModule.forRoot(),
    ToastModule.forRoot(),
    NbDialogModule.forRoot({
      hasBackdrop:true,
      hasScroll:true,
      closeOnBackdropClick:false,
      autoFocus:false
    }),
   
  ],
  exports: [
     ReactiveFormsModule,
     FormsModule,
     NbMenuModule,
     NbLayoutModule,
     NbCardModule,
     NbListModule,
     NbUserModule,
     NbTabsetModule,
     NbActionsModule,
     NbRadioModule,
     NbSelectModule,
     NbListModule,
     NbIconModule,
     NbButtonModule,
     NbSearchModule,
     NbCheckboxModule,
     NbDialogModule,
     NbInputModule,
     ToastModule,
  ],
  providers: [
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatFormFieldModule,
    // ToastrModule,
    // DatePipe
    // NbStatusService
  ],
})

export class SharedModule {
  // constructor(private iconLibraries: NbIconLibraries) {
  //   this.iconLibraries.registerFontPack('font-awesome', { packClass: 'fab', iconClassPrefix: 'fa' });
  // }
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        // NbStatusService
        // WebRequestService,
        // DataaccessService,
        // {
        //   provide: HTTP_INTERCEPTORS,
        //   useClass: AppInterceptorService,
        //   multi: true,
        // }
      ],
    };
  }
}
