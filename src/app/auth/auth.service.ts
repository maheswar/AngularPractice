import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn:'root'
})
export class AuthService{
    loginKey:string;
    constructor(private http:HttpClient){      
    }
    login(userName:string,password:string){
        var sampleHeaders=new HttpHeaders({'test123':'123'});
        sampleHeaders=sampleHeaders.append('test456','456')
        return this.http.post('www.samplelogin.com',{userName,password},{
            headers:sampleHeaders
        });
    }
}