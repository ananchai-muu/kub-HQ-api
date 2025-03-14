// src/modules/employee/presentation/dto/employee-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class EmployeeResponseDto {
  @ApiProperty({
    example: '660df4e5bcf86cd799439011',
    description: 'Unique ID of the employee',
  })
  id: string;

  @ApiProperty({ example: 'John' })
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  lastName: string;

  @ApiProperty({ example: 'johndoe@example.com' })
  email: string;

  @ApiProperty({ example: '0812345678' })
  phoneNumber: string;

  @ApiProperty({ example: 'Manager' })
  position: string;

  @ApiProperty({ example: '660df4e5bcf86cd799439011' })
  branchId: string;

  @ApiProperty({ example: 50000 })
  salary: number;

  @ApiProperty({ example: 40 })
  workingHours: number;

  @ApiProperty({ example: '2025-01-01' })
  startDate: Date;

  @ApiProperty({ example: 'active' })
  status: string;
}
