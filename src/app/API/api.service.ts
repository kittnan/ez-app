import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URLAPI!: any;
  constructor(private http: HttpClient) {
    this.URLAPI = environment.URLAPI;
  }

  getCustomers(): Observable<any>{
    return this.http.get(`${this.URLAPI}/customers/`)
  }
  addCustomer(data:any): Observable<any>{
    return this.http.post(`${this.URLAPI}/customers/add/`,data)
  }
  deleteCustomer(id:any): Observable<any>{
    return this.http.delete(`${this.URLAPI}/customers/delete/`+id)
  }
  updateCustomer(id:any,data:any): Observable<any>{
    return this.http.put(`${this.URLAPI}/customers/update/`+id,data)
  }

  getMembers(): Observable<any>{
    return this.http.get(`${this.URLAPI}/members/`)
  }
  addMembers(data:any): Observable<any>{
    return this.http.post(`${this.URLAPI}/members/add/`,data)
  }
  deleteMember(id:any): Observable<any>{
    return this.http.delete(`${this.URLAPI}/members/delete/`+id)
  }
  updateMember(id:any,data:any): Observable<any>{
    return this.http.put(`${this.URLAPI}/members/update/`+id,data)
  }
}
