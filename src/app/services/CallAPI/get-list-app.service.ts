import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Application} from "../../interfaces/application";
import {HandleError, HttpErrorHandler} from "../http-error-handler.service";


@Injectable()
export class GetListAppService {
  apiApplicationsUrl= 'http://localhost:8888/app/name'
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('GetListAppService');
  }

  /** GET heroes from the server */
  getApplicationList(): Observable<Application[]> {
    return this.http.get<Application[]>(this.apiApplicationsUrl)
      .pipe(
        catchError(this.handleError('getApplicationList', []))
      );
  }
}
