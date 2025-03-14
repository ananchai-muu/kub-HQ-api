export class BranchRepositoryInterface {}
import { Branch } from '../entities/branch.entity';

export interface IBranchRepository {
  create(branch: Branch): Promise<Branch>;
  findAll(criteria: any): Promise<Branch[]>;
  findById(id: string): Promise<Branch>;
  update(id: string, branchData: Partial<Branch>): Promise<Branch>;
  delete(id: string): Promise<void>;
  patch(id: string, branchData: Partial<Branch>): Promise<Branch>;
}
