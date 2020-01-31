import { HttpEvent,HttpRequest,HttpHandler,HttpInterceptor, HttpParams } from "@angular/common/http";
import {Observable, throwError} from "rxjs"
import { AuthService } from "../auth/auth.service";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class RequestInterceptors implements HttpInterceptor{
    constructor(private auth:AuthService){

    }
    intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
        if(!this.auth.loginKey||this.auth.loginKey==""){
            return throwError("Your session has time out")
       }
       let modifiedReq=req.clone({params:new HttpParams().set('auth',this.auth.loginKey)})
       modifiedReq.headers.append("key","213654897")
       return next.handle(modifiedReq)      
    }
}