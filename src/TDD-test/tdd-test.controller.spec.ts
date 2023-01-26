import { Test, TestingModule } from '@nestjs/testing';
import { TddTestController } from './tdd-test.controller';

describe('TddTestController', () => {
    let controller: TddTestController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TddTestController],
        }).compile();

        controller = module.get<TddTestController>(TddTestController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('addApp', () => {
        it('더하기 테스트', async () => {
            const;
        });
    });
});
