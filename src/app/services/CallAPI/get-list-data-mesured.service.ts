import { Injectable } from '@angular/core';
import {HandleError, HttpErrorHandler} from "../http-error-handler.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Application} from "../../interfaces/application";
import {catchError} from "rxjs/operators";
import {Tables} from "../../interfaces/tables";

@Injectable({
  providedIn: 'root'
})
export class GetListDataMesuredService {
  apiApplicationsUrl= 'http://localhost:8888/tables'
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('GetListDataMesuredService');
  }

  /** GET Data from the server */
  getDataMesuredList(): Observable<Tables[]> {
    return this.http.get<Tables[]>(this.apiApplicationsUrl)
      .pipe(
        catchError(this.handleError('GetListDataMesuredService', []))
      );
  }
}
