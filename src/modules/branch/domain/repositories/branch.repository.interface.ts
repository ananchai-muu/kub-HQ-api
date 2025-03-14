export class BranchRepositoryInterface {}
import { Branch } from '../entities/branch.entity';

export interface IBranchRepository {
  create(branch: Branch): Promise<Branch>;
  findAll(): Promise<Branch[]>;
  findById(id: string): Promise<Branch>;
  update(id: string, branch: Branch): Promise<Branch>;
  delete(id: string): Promise<void>;
}
