import { Body, Controller, Post } from '@nestjs/common';
import { TddTestService } from './tdd-test.service';

@Controller('tdd-test')
export class TddTestController {
    constructor(private _tddTestService: TddTestService) {}

    @Post()
    addTest(@Body() Body) {
        return this._tddTestService;
    }
}
