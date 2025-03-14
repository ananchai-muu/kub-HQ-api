import { Inject, Injectable } from '@nestjs/common';
import { IBranchRepository } from '../../../domain/repositories/branch.repository.interface';
import { BranchRepository } from '../../../infrastructure/repositories/branch.repository/branch.repository';

@Injectable()
export class DeleteBranchUseCase {
  constructor(
    @Inject(BranchRepository)
    private readonly branchRepository: IBranchRepository,
  ) {}

  async execute(id: string): Promise<void> {
    return this.branchRepository.delete(id);
  }
}
