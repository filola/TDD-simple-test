import { ITddTestRepository } from './tdd-test.repository.interface';

export class TddTestRepository implements ITddTestRepository {
    async getValue(id: number) {
        return id + 1;
    }

    async addValue(value: number) {
        return true;
    }
}
