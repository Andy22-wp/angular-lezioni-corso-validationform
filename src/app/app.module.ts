import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './services/user.service';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Routes, RouterModule } from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';
import { RoutingModule } from './routing-module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RoutingModule],
  exports:      [ RouterModule ],
  providers:    [ UserService ],
  declarations: [ AppComponent, HelloComponent, UsersComponent, UserComponent, UserDetailsComponent, UserDataComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
