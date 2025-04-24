import { Controller, Get, Param, Query, Redirect } from "@nestjs/common"

@Controller('users')
export class UserController{
    @Get()
    getUsers():any{
        return("User controllers");
    }

    @Get('docs') //test with 'http://localhost:3000/users/docs?version=5'
    @Redirect('https://docs.nestjs.com/v5/',302)
    getDocs(@Query('version') version){
        if(version && version ==5){
            return { url: 'https://docs.nestjs.com/v5/'}
        }
    }

    @Get(':id')
    findUser(@Param('id') id:string):string{
        return (`This action is returning param ${id}`)
    }

   
}