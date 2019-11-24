import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RootModule, UIRouterModule, Transition } from '@uirouter/angular';
import { LoginComponent } from './scripts/components/login/login.component';
import { UserComponent } from './scripts/components/user/user.component';
import { InqComponent } from './scripts/components/inq/inq.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonDirective } from './scripts/directives/common.directive';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpReqInterceptor } from './scripts/components/interceptor/http-interceptor';
import { HttpErrorInterceptor } from './scripts/components/interceptor/http-error-interceptor';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomParserFormatter } from './scripts/components/common/NgbDateCustomParserFormatter';
import { TestComponent } from './scripts/components/test/test.component';
import { TestModalComponent } from './scripts/components/test/test-modal.component';
import { UserDetailsComponent } from './scripts/components/user/user-details.component';
import { UserHomeComponent } from './scripts/components/user/user-home.component';
import { LogoutComponent } from './scripts/components/login/logout.component';
import { CurrencyFormatPipe } from './scripts/pipes/currency-format.pipe';
import { UploadComponent } from './scripts/components/upload/upload.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TestFormComponent } from './scripts/components/testForm/test.form';


const rootModule: RootModule = {
  states: [
    {
    name: "login",
    url: "/",
    component: LoginComponent
    },
    {
      name: "user",
      component: UserComponent
    },
    {
      name: "user.home",
      component: UserHomeComponent
    },
    {
      name: "user.details",
      component: UserDetailsComponent
      /*views: {
        user: { component: UserDetailsComponent }
      }*/
    },
    {
      name: "inq",
      component: InqComponent
    },
    {
      name: "test",
      component: TestComponent,
      params: {isMaker: true},
    },
    {
      name: "upload",
      component: UploadComponent
    },
    {
       name: "Form",
       component: TestFormComponent
    }
  ],
  otherwise: "/"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    InqComponent,
    CommonDirective,
    TestComponent,
    TestModalComponent,
    UserDetailsComponent,
    UserHomeComponent,
    LogoutComponent,
    CurrencyFormatPipe,
    UploadComponent,
    TestFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UIRouterModule.forRoot(rootModule),
    HttpClientModule,
    NgbModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule
  ],
  exports: [UIRouterModule, TestModalComponent],
  entryComponents: [
    TestModalComponent,
],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpReqInterceptor,
    multi: true
  },{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  },{
    provide: NgbDateParserFormatter, 
    useClass: NgbDateCustomParserFormatter}],
  bootstrap: [AppComponent]
})
export class AppModule { }
