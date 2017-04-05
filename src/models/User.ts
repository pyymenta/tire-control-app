export class User{
    fullname: string;
    email: string;
    user: string;
    pass: string;
    token: string;
    constructor(user: string, pass: string, fullname?: string, email?: string, token?:string){
        if(fullname){
            this.fullname = fullname;
        }
        if(email){
            this.email = email;
        }
        if(token){
            this.token = token;
        }
        this.user = user;
        this.pass = pass;
    }
}