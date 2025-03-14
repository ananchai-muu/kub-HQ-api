import { EmployeeRepository } from './employee.repository';

describe('EmployeeRepository', () => {
  it('should be defined', () => {
    expect(new EmployeeRepository()).toBeDefined();
  });
});
