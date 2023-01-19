import { Test, TestingModule } from '@nestjs/testing';
import { TddTestRepository } from './tdd-test.repository';
import { TddTestService } from './tdd-test.service';

// const mocData: mocDTO = { id: 1 , value: 10}

describe('TddTestService', () => {
    let service: TddTestService;
    let repository: TddTestRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TddTestService, TddTestRepository],
        }).compile();

        service = module.get<TddTestService>(TddTestService);
        repository = module.get<TddTestRepository>(TddTestRepository);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    // 1. input으로 id, value 값을 받고
    // 2. repository에서 해당 id 값을 가져와서
    // 3. value값과 합을 구해서 DB저장하고
    // 4. 값에 value 값 * id값을 곱한 값을 return

    describe('tdd-test', () => {
        const mocBady = { id: 1, value: 10 };
        let sumValue;

        it('tdd-test-is-function?', async () => {
            expect(typeof service.tddTest).toBe('function');

            // service.addValue = jest.fn()
            // const drink = await service.tddTest(mocBady);
            // expect(service.addValue).toHaveBeenCalled();
        });

        it('2. repository에서 해당 id 값을 가져온다', async () => {
            const result = await repository.getValue(mocBady.id);

            expect(result).toBe(2);
        });

        it('3-1. value값과 합을 구한다', async () => {
            // const result = mocBady.value + (await repository.getValue(mocBady.id));
            const idValue = await repository.getValue(mocBady.id);
            const result = await service.addValue(mocBady.value, idValue);

            expect(result).toBe(12);
        });

        it('3-2. DB 저장을 한다', async () => {
            const idValue = await repository.getValue(mocBady.id);
            const sumValue = await service.addValue(mocBady.value, idValue);
            const result = await repository.addValue(sumValue);

            // expect(result).toBe(true);
            expect(result).toBeTruthy();
        });

        it('4. 값에 value 값 * id값을 곱한 값을 return', async () => {
            const idValue = await repository.getValue(mocBady.id);
            const sumValue = await service.addValue(mocBady.value, idValue);

            const result = await service.multiply(sumValue, mocBady.value, idValue);

            expect(result).toBe(240);
        });

        it('tdd test result = 240', async () => {
            const result = await service.tddTest(mocBady);
            expect(result).toBe(240);
        });
    });
});
