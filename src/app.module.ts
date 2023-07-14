import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './controllers/user/user.module';
import { PostModule } from './controllers/post/post.module';
import { CommentModule } from './controllers/comment/comment.module';

@Module({
  imports: [
    UserModule,
    PostModule,
    CommentModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/web_project'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
