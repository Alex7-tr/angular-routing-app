import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [BrowserModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
