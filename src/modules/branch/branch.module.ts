import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Branch, BranchSchema } from './domain/entities/branch.entity';
import { BranchRepository } from './infrastructure/repositories/branch.repository/branch.repository';
import { CreateBranchUseCase } from './application/use-cases/create-branch.use-ca/create-branch.use-ca';
import { BranchController } from './infrastructure/controllers/branch/branch.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Branch.name, schema: BranchSchema }]),
  ],
  controllers: [BranchController],
  providers: [BranchRepository, CreateBranchUseCase],
})
export class BranchModule {}
