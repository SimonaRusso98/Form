import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { People } from '../models/employees';
@Injectable({
  providedIn: 'root'
})
export class PublicApiService {
  

  constructor(private http:HttpClient) { }

 // loadApi:any => () => PublicApiService.get<any>('https://jsonplaceholder.typicode.com/todos/1').toPromise();
/* loadApi(){
return this.PublicApiService.http.get<any>('https://jsonplaceholder.typicode.com/todos/1').toPromise();
 }*/
apiUrl: string= 'https://jsonplaceholder.typicode.com/todos/1';
 loadApi = async () => await this.http.get<any>(`${this.apiUrl}`).toPromise();


 apiUrl2: string = 'https://jsonplaceholder.typicode.com/albums';

loadList = async ()=> await this.http.get<People[]>(`${this.apiUrl2}`).toPromise();

}


