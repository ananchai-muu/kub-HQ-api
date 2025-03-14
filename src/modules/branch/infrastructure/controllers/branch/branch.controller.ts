import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateBranchDto } from '../../../dto/create-branch.dto/create-branch.dto';
import { CreateBranchUseCase } from '../../../application/use-cases/create-branch.use-ca/create-branch.use-ca';
import { Branch } from '../../../domain/entities/branch.entity';

@Controller('branch')
export class BranchController {
  constructor(private readonly createBranchUseCase: CreateBranchUseCase) {}

  @Post()
  async createBranch(@Body() createBranchDto: CreateBranchDto): Promise<Branch> {
    return this.createBranchUseCase.execute(createBranchDto);
  }

  @Get(':id')
  async getBranch(@Param('id') id: string): Promise<Branch> {
    return this.createBranchUseCase.execute({ name: id, address: '', phone: '', status: '' });
  }
}
