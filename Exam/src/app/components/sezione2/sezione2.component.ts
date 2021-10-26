import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employees';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-sezione2',
  templateUrl: './sezione2.component.html',
  styleUrls: ['./sezione2.component.scss']
})
export class Sezione2Component implements OnInit {
  employeeList: Employee[]=[
    {id: 1, name: "Josh Radnor", description: 'Loyalty'},
    {id: 2, name: "Ellison Parker", description: 'Problem solving'},
    {id: 3, name: "Jane Austine", description: 'Pacefull'}
  ];

  
  constructor(private router: Router, private route: ActivatedRoute) { }

  employee1=false;
  employee2=false;
  employee3=false;

  public name1:number | undefined | string| any;

  ifClicked(){
    this.employee1=!this.employee1;
  }

  ifClicked2(){
    this.employee2=!this.employee2;
    this.employee1=false;
    this.employee3=false;
  }

  ifClicked3(){
    this.employee3=!this.employee3;
    this.employee1=false;
    this.employee2=false;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let name= parseInt(params.get('name')|| "");
      this.name1=name;
    });
  }

  onSelect(emp: Employee){
    this.router.navigate([emp.name], {relativeTo: this.route});
  }

  isSelected(emp:Employee){
    return emp.name === this.name1;
  }

}
