import { IComment } from "src/interfaces/comment";

 
export class CommentDto implements IComment {
    authorId:string;
    authorLogin:string;
    postId:string;
    postTitle:string;
    text:string;
    createTimeLabel:string;

    constructor(text,authorLogin,authorId,postId,postTitle,createTimeLabel){
        this.authorId = authorId; 
        this.authorLogin = authorLogin; 
        this.postId = postId;
        this.postTitle = postTitle;
        this.text = text;
        this.createTimeLabel = createTimeLabel;
    }
 }