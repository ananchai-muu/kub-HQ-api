import { EmployeeRepositoryInterface } from './employee.repository.interface';

describe('EmployeeRepositoryInterface', () => {
  it('should be defined', () => {
    expect(new EmployeeRepositoryInterface()).toBeDefined();
  });
});
