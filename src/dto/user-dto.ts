/* eslint-disable prettier/prettier */
import { IUser } from "src/interfaces/user";

 
export class UserDto implements IUser {
    password: string;
    login: string;
    email: string;
    id: string;
    bookmarks: Array<any>;
    registrationDate:string

    constructor(password,login,email,id,bookmarks,registrationDate){
        this.password = password; 
        this.login = login; 
        this.email = email;
        this.id = id;
        this.bookmarks = bookmarks;
        this.registrationDate = registrationDate
    }
 }