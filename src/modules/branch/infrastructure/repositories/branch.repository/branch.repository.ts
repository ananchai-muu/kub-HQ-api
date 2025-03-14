import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IBranchRepository } from '../../../domain/repositories/branch.repository.interface';
import { Branch } from '../../../domain/entities/branch.entity';

@Injectable()
export class BranchRepository implements IBranchRepository {
  constructor(@InjectModel(Branch.name) private branchModel: Model<Branch>) {}

  async create(branch: Branch): Promise<Branch> {
    const createdBranch = new this.branchModel(branch);
    return createdBranch.save();
  }

  async findAll(
    queryParams: Record<string, string | number>,
  ): Promise<Branch[]> {
    const query: any = {};

    // Mapping Query String -> MongoDB Query
    Object.entries(queryParams).forEach(([key, value]) => {
      if (typeof value === 'string' && isNaN(Number(value))) {
        query[key] = { $regex: new RegExp(value, 'i') }; // ค้นหาแบบ case-insensitive
      } else {
        query[key] = value;
      }
    });

    return this.branchModel.find(query).exec();
  }

  async findById(id: string): Promise<Branch> {
    return this.branchModel.findById(id).exec();
  }

  async update(id: string, branch: Branch): Promise<Branch> {
    return this.branchModel.findByIdAndUpdate(id, branch, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.branchModel.findByIdAndDelete(id).exec();
  }
  async patch(id: string, branchData: Partial<Branch>): Promise<Branch> {
    return this.branchModel
      .findByIdAndUpdate(id, branchData, { new: true })
      .exec();
  }
}
