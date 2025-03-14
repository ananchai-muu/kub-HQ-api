import { EmployeeRepository } from '../../../infrastructure/repositories/employee.repository';
import { Employee } from '../../../domain/entities/employee.entity';
import { Inject, Injectable } from '@nestjs/common';
@Injectable()
export class GetEmployeeUseCase {
  constructor(
    @Inject(EmployeeRepository)
    private readonly employeeRepository: EmployeeRepository,
  ) {}

  async execute(id: string): Promise<Employee> {
    return this.employeeRepository.findById(id);
  }
}
