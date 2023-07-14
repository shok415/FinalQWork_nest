/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IPost } from 'src/interfaces/post';
 
export type PostDocument = HydratedDocument<Posts>;
 
@Schema()
export class Posts implements IPost {
    @Prop() title: string
 
    @Prop() body: string  

    @Prop() img: string

    @Prop() authorId: string

    @Prop() authorLogin: string

    @Prop() rating: string

    @Prop() createTime: string

    @Prop() createTimeLabel: string

    
 }   export const PostSchema = SchemaFactory.createForClass(Posts);