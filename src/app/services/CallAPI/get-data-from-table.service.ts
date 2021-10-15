import { Injectable } from '@angular/core';
import {HandleError, HttpErrorHandler} from "../http-error-handler.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tables} from "../../interfaces/tables";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GetDataFromTableService {
  apiApplicationsUrl= 'http://localhost:8888/'
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('GetDataFromTableService');
  }

  /** GET Application from the server */
  getDataFromTable(nameTable : string): Observable<any[]> {
    return this.http.get<Tables[]>(this.apiApplicationsUrl+nameTable)
      .pipe(
        catchError(this.handleError('GetDataFromTableService', []))
      );
  }
}
