import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'nx-first-app-savings-balance',
  templateUrl: './savings-balance.component.html',
  styleUrls: ['./savings-balance.component.scss']
})
export class SavingsBalanceComponent implements OnInit {
  formGroup: FormGroup = this.fb.group({});

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
  }

}
