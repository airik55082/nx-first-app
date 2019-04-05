import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: '', component: AppComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    TranslateModule.forRoot(),
    BrowserModule
  ],
  declarations: [AppComponent, StartComponent],
  providers: [],
  bootstrap: [AppComponent],
  exports: [StartComponent]
})
export class AppModule {}
