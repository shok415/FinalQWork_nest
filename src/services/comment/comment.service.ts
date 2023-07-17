/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentDto } from 'src/dto/comment-dto';
import { IComment } from 'src/interfaces/comment';
import { Comment, CommentDocument } from 'src/schemas/comment';

@Injectable()
export class CommentService {

    constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>) { }


    async uploadComment(body: IComment) {
        const comm = new CommentDto(
            body.text,
            body.authorLogin,
            body.authorId,
            body.postId,
            body.postTitle,
            body.createTimeLabel
        )
        const commData = new this.commentModel(comm)
        await commData.save()
    }

    async getPostComments(postId): Promise<IComment[]> {
        return this.commentModel.find({ postId: postId });
    }

    async getAllComments(): Promise<IComment[]> {
        return this.commentModel.find();
    }
}
