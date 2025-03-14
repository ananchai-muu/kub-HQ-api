import { Inject, Injectable } from '@nestjs/common';
import { IBranchRepository } from '../../../domain/repositories/branch.repository.interface';
import { Branch } from '../../../domain/entities/branch.entity';
import { BranchRepository } from '../../../infrastructure/repositories/branch.repository/branch.repository';

@Injectable()
export class CreateBranchUseCase {
  constructor(
    @Inject(BranchRepository)
    private readonly branchRepository: IBranchRepository,
  ) {}

  async execute(branchData: {
    name: string;
    address: string;
    phone: string;
    status: string;
  }): Promise<Branch> {
    const branch = new Branch();
    branch.name = branchData.name;
    branch.address = branchData.address;
    branch.phone = branchData.phone;
    branch.status = branchData.status;

    return this.branchRepository.create(branch);
  }
}
