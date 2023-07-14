import { IPost } from "src/interfaces/post";

 
export class PostDto implements IPost {
    title:string;
    img:string;
    body:string;
    rating:string;
    authorId:string;
    authorLogin:string;
    createTime:string;
    createTimeLabel:string;

    constructor(title,body,img,authorId,authorLogin,createTimeLabel,rating,createTime){
        this.title = title; 
        this.img = img; 
        this.body = body;
        this.authorId = authorId;
        this.authorLogin = authorLogin;
        this.rating = rating;
        this.createTime = createTime;
        this.createTimeLabel = createTimeLabel;
    }
 }