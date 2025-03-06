import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/version')
  getVersion() {
    return this.appService.getVersion();
  }

  @Get('/test-lib')
  async getTestLib() {
    return await this.appService.getTestLib();
  }
}
