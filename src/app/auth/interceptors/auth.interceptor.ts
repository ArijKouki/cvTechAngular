import {AuthService} from "../services/auth.service";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {isPlatformBrowser} from "@angular/common";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    if (token) {
      const cloneReq = req.clone({
        params: new HttpParams().set('access_token', token)
      });
      return next.handle(cloneReq);
    }else {
      return next.handle(req);
    }


  }


}
