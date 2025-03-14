import { CreateEmployeeUseCase } from './create-employee.use-case';

describe('CreateEmployeeUseCase', () => {
  it('should be defined', () => {
    expect(new CreateEmployeeUseCase()).toBeDefined();
  });
});
