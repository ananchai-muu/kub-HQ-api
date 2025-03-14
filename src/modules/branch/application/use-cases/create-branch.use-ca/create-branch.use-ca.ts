export class CreateBranchUseCa {}
import { Injectable } from '@nestjs/common';
import { IBranchRepository } from '../../../domain/repositories/branch.repository.interface';
import { Branch } from '../../../domain/entities/branch.entity';

@Injectable()
export class CreateBranchUseCase {
  constructor(private readonly branchRepository: IBranchRepository) {}

  async execute(branchData: { name: string, address: string, phone: string, status: string }): Promise<Branch> {
    const branch = new Branch();
    branch.name = branchData.name;
    branch.address = branchData.address;
    branch.phone = branchData.phone;
    branch.status = branchData.status;

    return this.branchRepository.create(branch);
  }
}
