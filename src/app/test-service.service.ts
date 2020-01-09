import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {IEmployee} from './employee'
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators'
import {throwError} from 'rxjs'
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';

@Injectable({providedIn:'root'})  

export class TestServiceService {
private url:string="/assets/data/employee.json";
  constructor(private http:HttpClient) { }

  getEmployeeList():Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this.url)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse)
  {
    return throwError(error)
  }
}

