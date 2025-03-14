import { Inject, Injectable } from '@nestjs/common';
import { IBranchRepository } from '../../../domain/repositories/branch.repository.interface';
import { Branch } from '../../../domain/entities/branch.entity';
import { BranchRepository } from '../../../infrastructure/repositories/branch.repository';

@Injectable()
export class PatchBranchUseCase {
  constructor(
    @Inject(BranchRepository)
    private readonly branchRepository: IBranchRepository,
  ) {}

  async execute(id: string, branchData: Partial<Branch>): Promise<Branch> {
    return this.branchRepository.patch(id, branchData);
  }
}
