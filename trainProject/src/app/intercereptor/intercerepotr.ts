import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('intercerpot works');
        const token: string = localStorage.getItem('token');
        const test = {
            headers: new HttpHeaders(),
        };
        test.headers = test.headers.append('X-accces', '1');

        console.log(test.headers, 'test Headers');
        // let headers2: HttpHeaders = new HttpHeaders();
        // headers2 = headers2.append('Authorization', 'testToke');
        // headers2 = headers2.append('Content-Type', 'application/json');

        // to jest istotne dzialajacy interceptor 
        // if (token) { // login np;
        //     req = req.clone({ headers: req.headers.set('Authorization', 'testToke' + token) });
        // }
        // if (!req.headers.has('Content-Type')) {// sprawdznie cotentu
        //     req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        // }
        // req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

        // to jest TEST  innej metody dodawanie Hedarsow 
        req = req.clone({headers: test.headers});
        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let data = {};
                data = {
                    reason: error && error.error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                console.log(data, 'data error');
                return throwError(error);
            })
        );
    }
}
