export interface ITddTestRepository {
    getValue(id: number): Promise<number>;
    addValue(value: number): Promise<boolean>;
}

export const ITddTestRepository = Symbol('ITddTestRepository');
