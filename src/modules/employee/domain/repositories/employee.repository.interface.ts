import { Employee } from '../entities/employee.entity';

export interface IEmployeeRepository {
  create(employee: Employee): Promise<Employee>;
  findAll(criteria: any): Promise<Employee[]>;
  findById(id: string): Promise<Employee>;
  update(id: string, employeeData: Partial<Employee>): Promise<Employee>;
  delete(id: string): Promise<void>;
  patch(id: string, employeeData: Partial<Employee>): Promise<Employee>;
}
