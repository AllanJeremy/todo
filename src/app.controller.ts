import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { ok: boolean; message: string } {
    return this.appService.getHello();
  }

  @Post()
  something(): any {
    return { data: { user: { name: 'Allan Jeremy' } } };
  }
}
