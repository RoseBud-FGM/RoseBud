import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({

    })
  }
  submitReport() {
    console.log("Hagu");
  }
}
