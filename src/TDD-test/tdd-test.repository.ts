export class TddTestRepository {
    async getValue(id: number) {
        return id + 1;
    }

    async addValue(value: number) {
        return true;
    }
}
