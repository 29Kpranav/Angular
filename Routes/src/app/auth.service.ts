import { rejects } from "assert";
import { resolve } from "dns";

export class AuthService{
    loggedIn = false;

    isAuthentiction(){
        const promise = new Promise(
        (resolve, reject) => {
            setTimeout(() => {
            resolve(this.loggedIn);
        }, 800);
        }
        );

        return Promise;
    }

    login(){
      this.loggedIn = true;
    }

    logout(){
      this.loggedIn = false;
    }
}