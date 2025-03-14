import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IBranchRepository } from '../../domain/repositories/branch.repository.interface';
import { Branch } from '../../domain/entities/branch.entity';
@Injectable()
export class BranchRepository implements IBranchRepository {
  constructor(@InjectModel(Branch.name) private model: Model<Branch>) {}

  async create(createBranch: Branch): Promise<Branch> {
    // แปลง CreateBranchDto เป็น Branch entity ก่อนที่จะบันทึก
    const createdBranch = new this.model({
      name: createBranch.name,
      status: createBranch.status,
      phone: createBranch.phone,
      location: createBranch.location,
      address: {
        district: createBranch.address.district,
        province: createBranch.address.province,
        country: createBranch.address.country,
        postcode: createBranch.address.postcode,
      },
    });

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

    return this.model.find(query).exec();
  }

  async findById(id: string): Promise<Branch> {
    return this.model.findById(id).exec();
  }

  async update(id: string, data: Branch): Promise<Branch> {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id).exec();
  }
  async patch(id: string, data: Partial<Branch>): Promise<Branch> {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }
}
