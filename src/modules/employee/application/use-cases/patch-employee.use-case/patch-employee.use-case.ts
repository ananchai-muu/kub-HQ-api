import { EmployeeRepository } from '../../../infrastructure/repositories/employee.repository';
import { Employee } from '../../../domain/entities/employee.entity';
import { Inject, Injectable } from '@nestjs/common';
@Injectable()
export class PatchEmployeeUseCase {
  constructor(
    @Inject(EmployeeRepository)
    private readonly employeeRepository: EmployeeRepository,
  ) {}

  async execute(id: string, employeeData: Employee): Promise<Employee> {
    return this.employeeRepository.patch(id, employeeData);
  }
}
