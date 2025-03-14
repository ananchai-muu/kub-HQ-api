// src/modules/employee/presentation/dto/create-employee.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsNumber,
  IsDate,
  IsNotEmpty,
} from 'class-validator';

export class CreateEmployeeDto {
  @ApiProperty({ example: 'John', description: 'First name of the employee' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'Doe', description: 'Last name of the employee' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    example: 'johndoe@example.com',
    description: 'Email of the employee',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '0812345678',
    description: 'Phone number of the employee',
  })
  @IsString()
  phoneNumber: string;

  @ApiProperty({ example: 'Manager', description: 'Position or job title' })
  @IsString()
  @IsNotEmpty()
  position: string;

  @ApiProperty({
    example: '660df4e5bcf86cd799439011',
    description: 'Branch ID where the employee works',
  })
  @IsString()
  @IsNotEmpty()
  branchId: string;

  @ApiProperty({ example: 50000, description: 'Salary of the employee' })
  @IsNumber()
  @IsNotEmpty()
  salary: number;

  @ApiProperty({ example: 40, description: 'Working hours per week' })
  @IsNumber()
  workingHours: number;

  @ApiProperty({
    example: '2025-01-01',
    description: 'Date when the employee started working',
  })
  @IsDate()
  @IsNotEmpty()
  startDate: Date;

  @ApiProperty({
    example: 'active',
    description: 'Employee status (active/inactive)',
  })
  @IsString()
  status: string;
}
