/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user';
import {InjectModel} from "@nestjs/mongoose";
import { JwtService } from '@nestjs/jwt/dist';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
                private jwtService: JwtService){        
    }
    
    async sendUser(data): Promise<User> {
        const userData = new this.userModel(data);
        return userData.save();
    }

    async getAllUsers(): Promise<User[]> {
        return this.userModel.find();
    }

    async checkRegUser(login: string): Promise<User[]> {
        return this.userModel.find({login: login});
    }
    
    async login(user: User){
        const payload = {login: user.login, password: user.password};
        const userFromDb = await this.userModel.find({login:user.login, password:user.password})
        if (userFromDb.length<1) {
            throw new HttpException({
                status: HttpStatus.CONFLICT,
                errorText: "Неверный логин или пароль"
            }, HttpStatus.CONFLICT)
        }else{
          return{
             login: userFromDb[0].login,
             id: userFromDb[0]._id,
             access_token: this.jwtService.sign(payload),
             bookmarks: userFromDb[0].bookmarks,
             email: userFromDb[0].email
          }
        }
    }

    async getUserById(id): Promise<User> {
        return this.userModel.findById(id);
    }

    async addBookMark(data): Promise<any> {
        let usrId = data.userId;
        let postId = data.postId;
        let userObj = this.userModel.findById(usrId)
        let list1 = (await userObj).bookmarks
        list1.push(postId)
        let list = {"bookmarks":list1}
        return this.userModel.findByIdAndUpdate(usrId, list);
    }
}
