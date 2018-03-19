import { AppMaterialModule } from './app-material-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { WorkTypeSetupComponent } from './components/work-type-setup/work-type-setup.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AppRoutingModule } from './app.routing.module';
import { WorkTypeComponent } from './components/work-type/work-type.component';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './services/alert.service';
import { WorkTypeCmp1Component } from './components/work-type-cmp1/work-type-cmp1.component';
import { WorkTypeCmp2Component } from './components/work-type-cmp2/work-type-cmp2.component';
import { WorkTypeSetupReviewComponent } from './components/work-type-setup-review/work-type-setup-review.component';
import { WorkTypeCmp3Component } from './components/work-type-cmp3/work-type-cmp3.component';
import { WorkTypeCmp4Component } from './components/work-type-cmp4/work-type-cmp4.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkTypeSetupComponent,
    TestFormComponent,
    LoginFormComponent,
    WorkTypeComponent,
    AlertComponent,
    WorkTypeCmp1Component,
    WorkTypeCmp2Component,
    WorkTypeSetupReviewComponent,
    WorkTypeCmp3Component,
    WorkTypeCmp4Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
