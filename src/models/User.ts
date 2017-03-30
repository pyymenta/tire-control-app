export class User{
    fullname: string;
    email: string;
    user: string;
    pass: string;
    constructor(user: string, pass: string, fullname?: string, email?: string){
        if(fullname){
            this.fullname = fullname;
        }
        if(email){
            this.email = email;
        }
        this.user = user;
        this.pass = pass;
    }
}