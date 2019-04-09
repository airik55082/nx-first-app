import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-quiz-button',
  templateUrl: './quiz-button.component.html',
  styleUrls: ['./quiz-button.component.scss']
})
export class QuizButtonComponent {
  @Input() buttonDisabled: boolean;
  @Input() buttonType: string;
  constructor() {}
}
