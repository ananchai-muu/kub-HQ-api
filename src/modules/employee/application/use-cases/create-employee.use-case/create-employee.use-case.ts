import { EmployeeRepository } from '../../../infrastructure/repositories/employee.repository';
import { Inject, Injectable } from '@nestjs/common';
import { Employee } from '../../../domain/entities/employee.entity';

@Injectable()
export class CreateEmployeeUseCase {
  constructor(
    @Inject(EmployeeRepository)
    private readonly employeeRepository: EmployeeRepository,
  ) {}

  async execute(employeeData: Employee): Promise<Employee> {
    return this.employeeRepository.create(employeeData);
  }
}
