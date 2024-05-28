import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token=localStorage.getItem('jwtToken');
    const newCloneRequest=request.clone({
      setHeaders:{
        Authorization: 'token'
      }
    })
    return next.handle(newCloneRequest);
  }
}
