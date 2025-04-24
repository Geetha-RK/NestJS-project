import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { AppService } from './app.service';

import { UserModule } from './users/users.module';

@Module({  //module decorator  - comes from @nestjs/common package
  imports: [ UserModule], //user defined module in imports
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
