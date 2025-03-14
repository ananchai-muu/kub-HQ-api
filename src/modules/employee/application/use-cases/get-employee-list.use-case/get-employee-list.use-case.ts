import { EmployeeRepository } from '../../../infrastructure/repositories/employee.repository';
import { Employee } from '../../../domain/entities/employee.entity';
import { Inject, Injectable } from '@nestjs/common';
@Injectable()
export class GetEmployeeListUseCase {
  constructor(
    @Inject(EmployeeRepository)
    private readonly employeeRepository: EmployeeRepository,
  ) {}

  async execute(criteria: any): Promise<Employee[]> {
    return this.employeeRepository.findAll(criteria);
  }
}
