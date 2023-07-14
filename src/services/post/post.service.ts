import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentDto } from 'src/dto/comment-dto';
import { PostDto } from 'src/dto/post-dto';
import { IComment } from 'src/interfaces/comment';
import { IPost } from 'src/interfaces/post';
import { PostDocument, Posts } from 'src/schemas/post';

@Injectable()
export class PostService {
    constructor(@InjectModel(Posts.name) private postModel: Model<PostDocument>) { }

    async uploadPost(body: IPost) {
        const post = new PostDto(
            body.title,
            body.body,
            body.img,
            body.authorId,
            body.authorLogin,
            body.createTimeLabel,
            body.rating,
            body.createTime
        )
        const postData = new this.postModel(post)
        await postData.save()
    }

    async getAllPosts(): Promise<IPost[]> {
        return this.postModel.find();
    }

    async getUsersPosts(authorId): Promise<IPost[]> {
        return this.postModel.find({ authorId: authorId });
    }

    async getPostById(id): Promise<IPost> {
        return this.postModel.findById(id);
    }

}
