import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employees';

@Component({
  selector: 'app-sezione2-type',
  templateUrl: './sezione2-type.component.html',
  styleUrls: ['./sezione2-type.component.scss']
})
export class Sezione2TypeComponent implements OnInit {
  @Input() emp: Employee = {};
  constructor() { }

  ngOnInit(): void {
  }

}
