import { Inject, Injectable } from '@nestjs/common';
import { ITddTestRepository } from './tdd-test.repository.interface';

@Injectable()
export class TddTestService {
    constructor(@Inject(ITddTestRepository) private _tddTestRepository: ITddTestRepository) {}

    async tddTest(body: { id: number; value: number }) {
        const idValue = await this._tddTestRepository.getValue(body.id);
        const sumValue = await this.addValue(body.value, idValue);
        await this._tddTestRepository.addValue(sumValue);

        return await this.multiply(sumValue, body.value, idValue);
    }

    async addValue(value: number, idValue: number) {
        return value + idValue;
    }

    async multiply(sumValue: number, value: number, idValue: number) {
        return sumValue * value * idValue;
    }

    async tddTest2(body: { id: number; value: number }) {
        const idValue = await this._tddTestRepository.getValue(body.id);
        const sumValue = body.value + idValue;

        return sumValue * body.value * idValue;
    }
}
