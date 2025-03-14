import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBranchDto } from './create-branch.dto';

export class UpdateBranchDto extends PartialType(CreateBranchDto) {
  @ApiProperty({
    example: 'active',
    description: 'Updated status of the branch (active/inactive)',
    required: false,
  })
  status?: string;
}
