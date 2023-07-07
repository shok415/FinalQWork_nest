/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/schemas/user';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @Get()
    getAllUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
    }

    @Post()
    sendUser(@Body() data: User): Promise<User> {
        return this.userService.sendUser(data);
    }
    @Post(":login")
    authUser(@Body() data: User, @Param('login') login): any  {
        return this.userService.login(data)
    }


    
}
