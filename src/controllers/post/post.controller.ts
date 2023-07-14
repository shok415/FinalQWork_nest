import { Body, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { IComment } from 'src/interfaces/comment';
import { IPost, IUserPost } from 'src/interfaces/post';
import { Posts } from 'src/schemas/post';
import { PostService } from 'src/services/post/post.service';

@Controller('post')
export class PostController {

    constructor(private postService: PostService) {}
    static img:string = "";

    @Post()
    @UseInterceptors(FileInterceptor('img', {
        storage:diskStorage({
           destination: './public/',
           filename:(req,file,cb) => {
            const imgType = file.mimetype.split('/')
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random()*1E9)
            const img = file.fieldname + '-' + uniqueSuffix + '.' + imgType[1]
            cb(null, img);
            PostController.img = img;
           }
        })
    })
    )
    savePost(@Body() body:IPost){ 
        body.img = PostController.img;
        this.postService.uploadPost(body)
        return body
    }

    @Get()
    getAllPosts(): Promise<Posts[]> {
        return this.postService.getAllPosts();
    }

    @Get(":id")
    getPostById(@Param('id') id): Promise<Posts> {
        return this.postService.getPostById(id);
    }

    @Get("/user/:id")
    getUsersPosts(@Param('id') id): Promise<Posts[]> {
        return this.postService.getUsersPosts(id);
    }

}
