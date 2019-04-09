import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { SavingsBalanceComponent } from './savings-balance/savings-balance.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizButtonComponent } from './quiz-button/quiz-button.component';
import { ConfidenceMeasureComponent } from './confidence-measure/confidence-measure.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'savings-balance', component: SavingsBalanceComponent },
  { path: 'confidence-measure', component: ConfidenceMeasureComponent }
];

const appBaseHref = environment.BASE_HREF;

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, appBaseHref + 'assets/');
}
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] }
    }),
    // FormBuilder
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, StartComponent, SavingsBalanceComponent, QuizButtonComponent, ConfidenceMeasureComponent],
  providers: [ 
    { provide: APP_BASE_HREF, useValue: appBaseHref }
  ],
  bootstrap: [AppComponent],
  exports: [SavingsBalanceComponent, QuizButtonComponent, ConfidenceMeasureComponent]
})
export class AppModule {}
