import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  allFormData:any=[];

  constructor( public http:HttpClient) { }

  // post employee data 
  postEmployee(data:any){
    return this.http.post<any>('http://localhost:3000/posts', data).pipe(map((res:any)=>{
      return res;
    }))
  }


  // get employee data 
  getEmployee(){
    return this.http.get<any>('http://localhost:3000/posts').pipe(map((res:any)=>{
      return res;
    }))
  }


  // update employee 
  updateEmployee(id:number, data:any){
    return this.http.put<any>('http://localhost:3000/posts/' + id , data).pipe(map((res:any)=>{
      return res;
    }))
  }

  // delet employee 
  deleteEmployee(id:number){
    return this.http.delete<any>('http://localhost:3000/posts/' + id).pipe(map((res:any)=>{
      return res;
    }))
  }
}
