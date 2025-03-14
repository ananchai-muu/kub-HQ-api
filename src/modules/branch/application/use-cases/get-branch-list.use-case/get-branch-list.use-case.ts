import { Injectable, Inject } from '@nestjs/common';
import { IBranchRepository } from '../../../domain/repositories/branch.repository.interface';
import { Branch } from '../../../domain/entities/branch.entity';
import { BranchRepository } from '../../../infrastructure/repositories/branch.repository';

@Injectable()
export class GetBranchListUseCase {
  constructor(
    @Inject(BranchRepository)
    private readonly branchRepository: IBranchRepository,
  ) {}

  async execute(criteria: any): Promise<Branch[]> {
    return this.branchRepository.findAll(criteria);
  }
}
