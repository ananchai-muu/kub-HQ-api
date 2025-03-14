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
import { CreateBranchDto } from '../../../dto/create-branch.dto/create-branch.dto';
import { CreateBranchUseCase } from '../../../application/use-cases/create-branch.use-case/create-branch.use-case';
import { PatchBranchUseCase } from '../../../application/use-cases/patch-branch.use-case/patch-branch.use-case';
import { GetBranchUseCase } from '../../../application/use-cases/get-branch.use-case/get-branch.use-case';
import { UpdateBranchUseCase } from '../../../application/use-cases/update-branch.use-case/update-branch.use-case';
import { DeleteBranchUseCase } from '../../../application/use-cases/delete-branch.use-case/delete-branch.use-case';
import { GetBranchListUseCase } from '../../../application/use-cases/get-branch-list.use-case/get-branch-list.use-case';

@Controller('branch')
export class BranchController {
  constructor(
    private readonly createBranchUseCase: CreateBranchUseCase,
    private readonly getBranchUseCase: GetBranchUseCase,
    private readonly getListBranchUsecase: GetBranchListUseCase,
    private readonly updateBranchUseCase: UpdateBranchUseCase,
    private readonly patchBranchUseCase: PatchBranchUseCase,
    private readonly deleteBranchUseCase: DeleteBranchUseCase,
  ) {}

  @Post()
  async create(@Body() createBranchDto: CreateBranchDto) {
    return this.createBranchUseCase.execute(createBranchDto);
  }
  @Get()
  async getList(@Query() queryParams: Record<string, string | number>) {
    return this.getListBranchUsecase.execute(queryParams);
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
    return this.updateBranchUseCase.execute(id, branchData);
  }

  @Patch(':id')
  async patch(
    @Param('id') id: string,
    @Body() branchData: Partial<CreateBranchDto>,
  ) {
    return this.patchBranchUseCase.execute(id, branchData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.deleteBranchUseCase.execute(id);
  }
}
