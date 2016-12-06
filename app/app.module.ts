import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation.component';
import { SidebarComponent } from './sidebar.component';

@NgModule({
	imports: [BrowserModule, FormsModule, HttpModule],
	declarations: [AppComponent,NavigationComponent,SidebarComponent],
	bootstrap: [AppComponent]
})

export class AppModule { }