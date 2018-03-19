import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CommonModule } from '@angular/common';
import { WorkTypeSetupComponent } from './components/work-type-setup/work-type-setup.component';
import { WorkTypeComponent } from './components/work-type/work-type.component';
import { WorkTypeCmp1Component } from './components/work-type-cmp1/work-type-cmp1.component';
import { WorkTypeCmp2Component } from './components/work-type-cmp2/work-type-cmp2.component';
import { WorkTypeCmp3Component } from './components/work-type-cmp3/work-type-cmp3.component';
import { WorkTypeCmp4Component } from './components/work-type-cmp4/work-type-cmp4.component';
const routes: Routes = [
    { path: 'worktypesetup', component: WorkTypeSetupComponent },
    { path: 'login', component: LoginFormComponent },
    { path : 'worktype', component : WorkTypeComponent},
    { path : '', component : LoginFormComponent},
    { path : 'worktypecmp1', component : WorkTypeCmp1Component},
    { path : 'worktypecmp2', component : WorkTypeCmp2Component},
    { path : 'worktypecmp3', component : WorkTypeCmp3Component},
    { path : 'worktypecmp4', component : WorkTypeCmp4Component},
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ],
    declarations: []
  })
  export class AppRoutingModule { }
