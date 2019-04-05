import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '../environments/environment';

@Component({
  selector: 'nx-first-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui';

  constructor(private translate: TranslateService) {
    this.translate.currentLoader.getTranslation('en').subscribe(enTranslations => {
      this.translate.setTranslation('en', enTranslations, true);
      this.translate.setDefaultLang('en');
    });
  }
}
