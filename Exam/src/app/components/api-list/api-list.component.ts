import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/employees';
import { PublicApiService } from 'src/app/services/public-api.service';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent implements OnInit {
  name: string='';

 people: People[]=[];
  
  constructor(public publicApiService: PublicApiService) { }
 

  async ngOnInit() { 
    //console.log(this.publicApiService.loadApi);
   //const res1=  await this.publicApiService.loadList();
   const res1= await this.publicApiService.loadList();
  this.people = res1;
  console.log(this.people);
   
  }

 

  callService = async () => { 
    const res =  await this.publicApiService.loadApi();
    this.name = res.title;
   
  }
  
}
