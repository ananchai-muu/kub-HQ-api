import { ApiProperty } from '@nestjs/swagger';
import { AddressDto } from './create-branch.dto';

export class BranchResponseDto {
  @ApiProperty({
    example: '660df4e5bcf86cd799439011',
    description: 'Unique ID of the branch',
  })
  id: string;

  @ApiProperty({
    example: 'Siam Square Branch',
    description: 'Name of the branch',
  })
  name: string;

  @ApiProperty({
    example: 'active',
    description: 'Status of the branch (active/inactive)',
  })
  status: string;

  @ApiProperty({
    example: [100.523186, 13.736717],
    description: 'Geolocation of the branch [longitude, latitude]',
  })
  location: [number, number];

  @ApiProperty({ description: 'Address details of the branch' })
  address: AddressDto;

  @ApiProperty({
    example: '0812345678',
    description: 'Contact phone number of the branch',
  })
  phone: string;

  @ApiProperty({
    example: 50,
    description: 'Maximum number of employees in this branch',
  })
  maxEmployees: number;

  @ApiProperty({
    example: '2025-01-01',
    description: 'Date when the branch was opened',
  })
  openingDate: string;

  @ApiProperty({
    example: '2025-03-14T08:00:00Z',
    description: 'Branch creation timestamp',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2025-03-14T10:00:00Z',
    description: 'Branch last updated timestamp',
  })
  updatedAt: Date;
}
