import { Body, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CommentDto } from 'src/dto/comment-dto';
import { IComment } from 'src/interfaces/comment';
import { Comment } from 'src/schemas/comment';
import { CommentService } from 'src/services/comment/comment.service';

@Controller('comment')
export class CommentController {

    constructor(private commentService: CommentService) {}

    @Post()
    @UseInterceptors(FileInterceptor('img', {
    })
    )
    postComment(@Body() data: CommentDto): any{
        this.commentService.uploadComment(data)
        return data
    }

    @Get("/post/:id")
    getPostComments(@Param('id') id): Promise<Comment[]> {
        return this.commentService.getPostComments(id);
    }

    @Get()
    getAllPosts(): Promise<Comment[]> {
        return this.commentService.getAllComments();
    }
}
