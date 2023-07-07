/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { User, UserSchema } from 'src/schemas/user';
import { UserService } from 'src/services/user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/constants/private';

@Module({    
imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        JwtModule .register({
            secret: jwtConstants.secret
        })
],
controllers: [UserController],
providers: [UserService]})
export class UserModule {}
