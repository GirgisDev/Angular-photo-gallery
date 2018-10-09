import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.body) {
      let newBody = Object.assign(request.body, {
        api_key: "d6020e509061114a236c4e3a0dbe5e8d"
      });
      const requestClone = request.clone({
        // setHeaders: {
        //   "Content-Type": "text/plain"
        // },
        body: newBody
      });
      return next.handle(requestClone);
    } else return next.handle(request);
  }
}