import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { ok: boolean; message: string } {
    return { ok: true, message: 'Hello there!' };
  }
}
