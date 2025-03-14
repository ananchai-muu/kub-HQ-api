import { IEmployeeRepository } from '../../domain/repositories/employee.repository.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from '../../domain/entities/employee.entity';

@Injectable()
export class EmployeeRepository implements IEmployeeRepository {
  constructor(
    @InjectModel(Employee.name) private readonly model: Model<Employee>,
  ) {}

  async create(data: Employee): Promise<Employee> {
    const employee = new this.model(data);
    return employee.save();
  }

  async update(id: string, data: Partial<Employee>): Promise<Employee> {
    return this.model.findByIdAndUpdate(id, data, {
      new: true,
    });
  }

  async delete(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id).exec();
  }

  async findAll(
    queryParams: Record<string, string | number>,
  ): Promise<Employee[]> {
    const query: any = {};

    // Mapping Query String -> MongoDB Query
    Object.entries(queryParams).forEach(([key, value]) => {
      if (typeof value === 'string' && isNaN(Number(value))) {
        query[key] = { $regex: new RegExp(value, 'i') }; // ค้นหาแบบ case-insensitive
      } else {
        query[key] = value;
      }
    });

    return this.model.find(query).exec();
  }

  findById(id: string): Promise<Employee> {
    return this.model.findById(id).exec();
  }

  patch(id: string, data: Partial<Employee>): Promise<Employee> {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }
}
