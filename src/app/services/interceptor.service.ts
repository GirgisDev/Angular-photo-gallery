import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import swal from './../../vendors/js/swal'

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.body) {
      // let newBody = Object.assign(request.body, {
      //   api_key: "d6020e509061114a236c4e3a0dbe5e8d"
      // });
      // const requestClone = request.clone({
      //   setHeaders: {
      //     "Content-Type": "text/plain"
      //   },
      //   body: newBody
      // });
      return next.handle(request);
    } else return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errMsg = '';
          const toast = swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000
          });
          
          if (error.error instanceof ErrorEvent) {
            errMsg = `Error: ${error.error.message}`;
          }
          else {
            errMsg = `Error Code: ${error.status},  Message: ${error.message}`;
          }
          toast({
            type: 'error',
            title: errMsg
          })
          return throwError(errMsg);
        })
      )
  }
}