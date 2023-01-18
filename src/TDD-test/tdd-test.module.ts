import { Module } from '@nestjs/common';
import { TddTestController } from './tdd-test.controller';
import { TddTestService } from './tdd-test.service';

@Module({
    controllers: [TddTestController],
    providers: [TddTestService],
})
export class TddTestModule {}
