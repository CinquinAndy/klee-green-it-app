import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Application} from "../../interfaces/application";
import {HandleError, HttpErrorHandler} from "../http-error-handler.service";

@Injectable()
export class PostAppNameService {
  apiApplicationsUrl= 'http://localhost:8888/app/add/name/'
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('PostAppNameService');
  }

  /** GET Application from the server */
  postApplicationName(newName:string): Observable<string> {
    console.log('postApplicationName observable')
    // @ts-ignore
    return this.http.post<string>(this.apiApplicationsUrl,{name:newName})
      .pipe(
        catchError(this.handleError('getApplicationList', []))
      );
  }
}
