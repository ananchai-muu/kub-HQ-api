import { EmployeeRepository } from '../../../infrastructure/repositories/employee.repository';
import { Inject, Injectable } from '@nestjs/common';
@Injectable()
export class DeleteEmployeeUseCase {
  constructor(
    @Inject(EmployeeRepository)
    private readonly employeeRepository: EmployeeRepository,
  ) {}

  async execute(id: string): Promise<void> {
    return this.employeeRepository.delete(id);
  }
}
