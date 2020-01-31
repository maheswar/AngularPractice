import { Observable, Subject } from 'rxjs';

interface User{
    UserName:string;
    Password:string;
    Email:string;
    Mobile:string;
    Token:string;
    ExpiryDate:Date;
}
export class UserService{
    lstUsers:User[]=[];
    loginTime:number=10;
    logOut:Subject<boolean>=new Subject<boolean>();
    logInSub:Subject<User>=new Subject<User>();

    addUser(username,pswd){
        let token=this.getRandomToken()
        this.lstUsers.push({UserName:username,Password:pswd,Token:token} as User);
    }

    logout(token:string){
       this.lstUsers= this.lstUsers.filter(e=>e.Token!=token)
       localStorage.removeItem('userData');
       this.logOut.next(true);
    }

    autoLogin(){
        let encUserInfo=localStorage.getItem('userData');
        if(!!encUserInfo){
          let userInfo = JSON.parse(window.atob(encUserInfo)) as User;
          if(this.isValidUser(userInfo)){
            this.logInSub.next(userInfo);
          }else{
              this.logout('');
          }
        }
    }
    
    isValidUser(userInfo:User){
        if(new Date()<new Date(userInfo.ExpiryDate)&&userInfo.Token!=""){
            return true;
        }
        return false;
    }

    login(username,pswd){
        var that=this;
        return new Promise(function(res,rej){
            setTimeout(()=>{
                let userInfo= that.lstUsers.filter(e=>e.UserName.toLocaleLowerCase()==username.toLocaleLowerCase() && e.Password==pswd)
                if(userInfo.length>0){
                    let userData=userInfo[0];
                    var d1 = new Date (),
                    d2 = new Date ( d1 );
                    d2.setMinutes ( d1.getMinutes() + that.loginTime );
                    userData.ExpiryDate=d2;

                    that.logInSub.next();
                    localStorage.setItem('userData',window.btoa(JSON.stringify(userData)));
                    res(userData.Token);        
                }else{
                    rej("Invalid credentials");
                }
            },1500)
        })
    }

    getRandomToken():string{
       return (((Math.random()*1000)+999)*2-89).toString()
    }
}