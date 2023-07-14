/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IComment } from 'src/interfaces/comment';
 
export type CommentDocument = HydratedDocument<Comment>;
 
@Schema()
export class Comment implements IComment {
    @Prop() text: string

    @Prop() authorId: string
 
    @Prop() authorLogin: string  

    @Prop() postId: string

    @Prop() postTitle: string

    @Prop() createTimeLabel: string

 }   export const CommentSchema = SchemaFactory.createForClass(Comment);