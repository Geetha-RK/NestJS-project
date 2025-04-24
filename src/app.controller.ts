import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //controller decorator
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): String {
    return this.appService.getHello();
    
  }
}
