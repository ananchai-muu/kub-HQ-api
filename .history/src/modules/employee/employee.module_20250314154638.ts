import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './domain/entities/employee.entity';
import { EmployeeRepository } from './infrastructure/repositories/employee.repository';
import { CreateEmployeeUseCase } from './application/use-cases/create-employee.use-case/create-employee.use-case';
import { EmployeeController } from './presentation/controllers/employee.controller';
import { UpdateEmployeeUseCase } from './application/use-cases/update-employee.use-case/update-employee.use-case';
import { GetEmployeeUseCase } from './application/use-cases/get-employee.use-case/get-employee.use-case';
import { PatchEmployeeUseCase } from './application/use-cases/patch-employee.use-case/patch-employee.use-case';
import { DeleteEmployeeUseCase } from './application/use-cases/delete-employee.use-case/delete-employee.use-case';
import { GetEmployeeListUseCase } from './application/use-cases/get-employee-list.use-case/get-employee-list.use-case';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }]),
  ],
  controllers: [EmployeeController],
  providers: [
    EmployeeRepository,
    GetEmployeeListUseCase,
    GetEmployeeUseCase,
    UpdateEmployeeUseCase,
    PatchEmployeeUseCase,
    DeleteEmployeeUseCase,
    CreateEmployeeUseCase,
  ],
  exports: [EmployeeRepository],
})
export class EmployeeModule {}
