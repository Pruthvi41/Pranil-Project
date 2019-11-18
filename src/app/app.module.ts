import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiftComponent } from './swift/swift.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { SelectionComponent } from './selection/selection.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  { path: '', redirectTo: 'selection', pathMatch: 'full'},
  { path: 'selection', component: SelectionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'swift', redirectTo: 'login' },
  { path: '**', component: PageNotFoundComponentComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SwiftComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponentComponent,
    SelectionComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
