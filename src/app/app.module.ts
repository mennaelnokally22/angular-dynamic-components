import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogModule } from './dialog/dialog.module';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule
  ],
  entryComponents:[TestComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
