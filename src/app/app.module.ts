import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiftComponent } from './swift/swift.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

//const routes: Routes = [
  //{ path: '', redirectTo: 'login', pathMatch: 'full'},
  //{ path: 'login', component: LoginFormComponent },
  //{ path: 'register', component: RegistrationFormComponent },
  //{ path: 'todo', component: TodoAppComponent, canActivate: [AuthGuard] },
  //{ path: 'logout', component: LogoutComponent },
  //{ path: 'detail/:id', component: TodoDetailComponent, canActivate: [AuthGuard] },
  //{ path: '**', component: PageNotFoundComponent }
//]

@NgModule({
  declarations: [
    AppComponent,
    SwiftComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
