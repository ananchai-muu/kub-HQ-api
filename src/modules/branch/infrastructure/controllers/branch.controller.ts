import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
  Patch,
  Query,
} from '@nestjs/common';
import { CreateBranchDto } from '../../dto/branch.dto';
import { CreateBranchUseCase } from '../../application/use-cases/create-branch.use-case/create-branch.use-case';
import { PatchBranchUseCase } from '../../application/use-cases/patch-branch.use-case/patch-branch.use-case';
import { GetBranchUseCase } from '../../application/use-cases/get-branch.use-case/get-branch.use-case';
import { UpdateBranchUseCase } from '../../application/use-cases/update-branch.use-case/update-branch.use-case';
import { DeleteBranchUseCase } from '../../application/use-cases/delete-branch.use-case/delete-branch.use-case';
import { GetBranchListUseCase } from '../../application/use-cases/get-branch-list.use-case/get-branch-list.use-case';
import { plainToInstance } from 'class-transformer';
import { Branch } from '../../domain/entities/branch.entity';

@Controller('branch')
export class BranchController {
  constructor(
    private readonly createBranchUseCase: CreateBranchUseCase,
    private readonly getBranchUseCase: GetBranchUseCase,
    private readonly getListBranchUseCase: GetBranchListUseCase,
    private readonly updateBranchUseCase: UpdateBranchUseCase,
    private readonly patchBranchUseCase: PatchBranchUseCase,
    private readonly deleteBranchUseCase: DeleteBranchUseCase,
  ) {}

  @Post()
  async create(@Body() createBranchDto: CreateBranchDto) {
    const branchEntity = plainToInstance(Branch, createBranchDto);

    return this.createBranchUseCase.execute(branchEntity);
  }
  @Get()
  async getList(@Query() queryParams: Record<string, string | number>) {
    return this.getListBranchUseCase.execute(queryParams);
  }
  @Get(':id')
  async get(@Param('id') id: string) {
    return this.getBranchUseCase.execute(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() branchData: Partial<CreateBranchDto>,
  ) {
    // แปลงข้อมูลจาก DTO ให้ตรงกับ Branch Entity
    const updatedBranch = plainToInstance(Branch, {
      ...branchData,
      location: {
        type: 'Point',
        coordinates: branchData.location, // แปลงให้เป็น GeoJSON
      },
    });

    // ส่งข้อมูลที่แปลงแล้วไปยัง UseCase
    return this.updateBranchUseCase.execute(id, updatedBranch);
  }

  @Patch(':id')
  async patch(
    @Param('id') id: string,
    @Body() branchData: Partial<CreateBranchDto>,
  ) {
    // แปลงข้อมูลจาก DTO ให้ตรงกับ Branch Entity
    const patchedBranch = plainToInstance(Branch, {
      ...branchData,
      location: branchData.location
        ? { type: 'Point', coordinates: branchData.location } // แปลงให้เป็น GeoJSON
        : undefined,
    });

    // ส่งข้อมูลที่แปลงแล้วไปยัง UseCase
    return this.patchBranchUseCase.execute(id, patchedBranch);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.deleteBranchUseCase.execute(id);
  }
}
