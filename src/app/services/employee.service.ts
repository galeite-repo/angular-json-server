import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    console.log(data);
    return this._http.post('http://localhost:3000/employees', data);
  }
  getEmployees(): Observable<any> {
    return this._http.get('http://localhost:3000/employees');
  }
}
