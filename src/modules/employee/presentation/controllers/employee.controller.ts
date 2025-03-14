import { CreateEmployeeDto } from '../dto/create-employee.dto';
import { Employee } from '../../domain/entities/employee.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreateEmployeeUseCase } from '../../application/use-cases/create-employee.use-case/create-employee.use-case';
import { GetEmployeeListUseCase } from '../../application/use-cases/get-employee-list.use-case/get-employee-list.use-case';
import { GetEmployeeUseCase } from '../../application/use-cases/get-employee.use-case/get-employee.use-case';
import { UpdateEmployeeUseCase } from '../../application/use-cases/update-employee.use-case/update-employee.use-case';
import { DeleteEmployeeUseCase } from '../../application/use-cases/delete-employee.use-case/delete-employee.use-case';
import { PatchEmployeeUseCase } from '../../application/use-cases/patch-employee.use-case/patch-employee.use-case';
import { UpdateEmployeeDto } from '../dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(
    private readonly createEmployeeUsecase: CreateEmployeeUseCase,
    private readonly updateEmployeeUsecase: UpdateEmployeeUseCase,
    private readonly deleteEmployeeUsecase: DeleteEmployeeUseCase,
    private readonly getListEmployeeUsecase: GetEmployeeListUseCase,
    private readonly getEmployeeUsecase: GetEmployeeUseCase,
    private readonly patchEmployeeUsecase: PatchEmployeeUseCase,
  ) {}
  @Post()
  async create(@Body() createDTO: CreateEmployeeDto) {
    const branchEntity = plainToInstance(Employee, createDTO);

    return this.createEmployeeUsecase.execute(branchEntity);
  }
  @Get()
  async getList(@Query() queryParams: Record<string, string | number>) {
    return this.getListEmployeeUsecase.execute(queryParams);
  }
  @Get(':id')
  async get(@Param('id') id: string) {
    return this.getEmployeeUsecase.execute(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Partial<UpdateEmployeeDto>,
  ) {
    const updatedBranch = plainToInstance(Employee, data);

    return this.updateEmployeeUsecase.execute(id, updatedBranch);
  }

  @Patch(':id')
  async patch(
    @Param('id') id: string,
    @Body() data: Partial<UpdateEmployeeDto>,
  ) {
    const patchedEmployee = plainToInstance(Employee, data);

    return this.patchEmployeeUsecase.execute(id, patchedEmployee);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.deleteEmployeeUsecase.execute(id);
  }
}
