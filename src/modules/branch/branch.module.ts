import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Branch, BranchSchema } from './domain/entities/branch.entity';
import { BranchRepository } from './infrastructure/repositories/branch.repository';
import { CreateBranchUseCase } from './application/use-cases/create-branch.use-case/create-branch.use-case';
import { BranchController } from './presentation/controllers/branch.controller';
import { UpdateBranchUseCase } from './application/use-cases/update-branch.use-case/update-branch.use-case';
import { GetBranchUseCase } from './application/use-cases/get-branch.use-case/get-branch.use-case';
import { PatchBranchUseCase } from './application/use-cases/patch-branch.use-case/patch-branch.use-case';
import { DeleteBranchUseCase } from './application/use-cases/delete-branch.use-case/delete-branch.use-case';
import { GetBranchListUseCase } from './application/use-cases/get-branch-list.use-case/get-branch-list.use-case';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Branch.name, schema: BranchSchema }]),
  ],
  controllers: [BranchController],
  providers: [
    BranchRepository,
    GetBranchListUseCase,
    GetBranchUseCase,
    UpdateBranchUseCase,
    PatchBranchUseCase,
    DeleteBranchUseCase,
    CreateBranchUseCase,
  ],
  exports: [BranchRepository],
})
export class BranchModule {}
