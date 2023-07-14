/* eslint-disable prettier/prettier */
export interface IPost{
    title:string,
    body:string,
    img:string,
    authorId:string,
    authorLogin:string,
    createTimeLabel:string,
    rating:string,
    createTime:string
}

export interface IUserPost{
    title:string,
    body:string,
    authorID:string,
    // rating:number
    // imgTitle:string,
}