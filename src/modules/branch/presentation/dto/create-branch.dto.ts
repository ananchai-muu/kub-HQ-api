import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsArray,
  ValidateNested,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class AddressDto {
  @ApiProperty({
    example: 'Central District',
    description: 'District of the branch',
  })
  @IsString()
  @IsNotEmpty()
  district: string;

  @ApiProperty({ example: 'Bangkok', description: 'Province of the branch' })
  @IsString()
  @IsNotEmpty()
  province: string;

  @ApiProperty({ example: 'Thailand', description: 'Country of the branch' })
  @IsString()
  @IsNotEmpty()
  country: string;

  @ApiProperty({ example: '10100', description: 'Postal code of the branch' })
  @IsString()
  @IsNotEmpty()
  postcode: string;
}

export class CreateBranchDto {
  @ApiProperty({
    example: 'Siam Square Branch',
    description: 'Name of the branch',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'active',
    description: 'Status of the branch (active/inactive)',
  })
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty({
    example: [100.523186, 13.736717],
    description: 'Geolocation of the branch [longitude, latitude]',
  })
  @IsArray()
  @IsNumber({}, { each: true })
  @IsNotEmpty()
  location: [number, number];

  @ApiProperty({ description: 'Address details of the branch' })
  @ValidateNested()
  @Type(() => AddressDto)
  @IsNotEmpty()
  address: AddressDto;

  @ApiProperty({
    example: '0812345678',
    description: 'Contact phone number of the branch',
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    example: 50,
    description: 'Maximum number of employees in this branch',
  })
  @IsNumber()
  @IsNotEmpty()
  maxEmployees: number;

  @ApiProperty({
    example: '2025-01-01',
    description: 'Date when the branch was opened',
  })
  @IsString()
  @IsNotEmpty()
  openingDate: string;
}
