import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from 'src/schemas/comment';
import { CommentController } from './comment.controller';
import { CommentService } from 'src/services/comment/comment.service';

@Module({imports: [MongooseModule.forFeature([{ name: Comment.name, schema:CommentSchema }])
],
controllers: [CommentController],
providers: [CommentService]})

export class CommentModule {}
