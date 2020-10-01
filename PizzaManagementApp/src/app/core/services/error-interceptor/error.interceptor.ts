import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export class ErrorInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
        ): Observable<HttpEvent<any>> {
            return next.handle(req)
                        .pipe(
                            retry(1),
                            catchError((error: HttpErrorResponse) => {
                                let errorMessage = '';
                                if(error.error instanceof ErrorEvent){
                                    errorMessage = `Error: ${error.error.message}`;
                                } else {
                                    errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
                                }
                                console.log(errorMessage);
                                 return throwError(errorMessage);
                            })
                        )
    }

}