import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'start', component: StartComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [AppComponent, StartComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
