import { Module } from '@nestjs/common';
import { TddTestController } from './tdd-test.controller';
import { TddTestService } from './tdd-test.service';
import { ITddTestRepository } from './tdd-test.repository.interface';
import { TddTestRepository } from './tdd-test.repository';

@Module({
    controllers: [TddTestController],
    providers: [
        {
            provide: ITddTestRepository,
            useClass: TddTestRepository,
        },
        TddTestService,
    ],
    exports: [ITddTestRepository],
})
export class TddTestModule {}
