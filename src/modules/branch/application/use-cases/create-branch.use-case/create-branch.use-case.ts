import { Inject, Injectable } from '@nestjs/common';
import { IBranchRepository } from '../../../domain/repositories/branch.repository.interface';
import { Branch } from '../../../domain/entities/branch.entity';
import { BranchRepository } from '../../../infrastructure/repositories/branch.repository';

@Injectable()
export class CreateBranchUseCase {
  constructor(
    @Inject(BranchRepository)
    private readonly branchRepository: IBranchRepository,
  ) {}

  async execute(branchData: Branch): Promise<Branch> {
    return this.branchRepository.create(branchData);
  }
}
