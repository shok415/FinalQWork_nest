/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { User } from 'src/schemas/user';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @Get()
    getAllUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
    }

    @Post("/bookmark")
    addToBookmark(@Body() data: any): Promise<any>  {
        this.userService.addBookMark(data);
        return this.userService.getUserById(data.userId); 
    }

    @Post("/changepsw")
    cgangePsw(@Body() data: any): Promise<any>  {
        return this.userService.cgangePsw(data); 
    }

    @Post()
    sendUser(@Body() data: User): Promise<User> {
        return this.userService.checkRegUser(data.login).then((queryRes) => {
            console.log('data reg', queryRes)
            if (queryRes.length === 0) {
                return this.userService.sendUser(data);
            } else {
                console.log('err - user is exists')
                throw new HttpException({
                    status: HttpStatus.CONFLICT,
                    errorText: "Пользователь уже существует"
                }, HttpStatus.CONFLICT)
            }
        });

    }


    @Post(":login")
    authUser(@Body() data: User, @Param('login') login): any  {
        return this.userService.login(data)
    }

    @Get(":id")
    getUserById(@Param('id') id): Promise<User> {
        return this.userService.getUserById(id);
    }

    @Get("/bookmarks/:id")
    getUserBooks(@Param('id') id): Promise<User> {
        return this.userService.getUserBooks(id);
    }
}
