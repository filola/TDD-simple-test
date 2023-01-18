import { Controller, Get, Put, Req } from '@nestjs/common';
import { request } from 'http';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}
}
