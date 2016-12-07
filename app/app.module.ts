import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routingComponents } from './app.routing';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation.component';
import { SidebarComponent } from './sidebar.component';

@NgModule({
	imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
	declarations: [AppComponent,NavigationComponent,SidebarComponent,routingComponents],
	bootstrap: [AppComponent]
})

export class AppModule { }