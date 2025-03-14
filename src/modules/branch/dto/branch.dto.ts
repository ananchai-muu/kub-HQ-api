import { IsString, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class AddressDto {
  @IsString()
  district: string;

  @IsString()
  province: string;

  @IsString()
  country: string;

  @IsString()
  postcode: string;
}

export class CreateBranchDto {
  @IsString()
  name: string;

  @IsString()
  status: string;

  @IsArray()
  @IsNumber({}, { each: true })
  location: [number, number]; // [longitude, latitude]

  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;

  @IsString()
  phone: string;
}
