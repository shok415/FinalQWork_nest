import { Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './post.controller';
import { PostService } from 'src/services/post/post.service';
import { PostSchema, Posts } from 'src/schemas/post';

@Module({imports: [MongooseModule.forFeature([{ name: Posts.name, schema:PostSchema }])
],
controllers: [PostController],
providers: [PostService]})
export class PostModule {}
