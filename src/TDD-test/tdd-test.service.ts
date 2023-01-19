import { Injectable } from '@nestjs/common';
import { validateHeaderValue } from 'http';
import { TddTestRepository } from './tdd-test.repository';

@Injectable()
export class TddTestService {
    constructor(private _tddTestRepository: TddTestRepository) {}

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
}
