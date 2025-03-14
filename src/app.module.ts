import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BranchModule } from './modules/branch/branch.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { PosModule } from './modules/pos/pos.module';
import { FinanceModule } from './modules/finance/finance.module';
import { PerformanceModule } from './modules/performance/performance.module';
import { MarketingModule } from './modules/marketing/marketing.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/restaurant_db'), // กำหนด URL สำหรับ MongoDB
    BranchModule, EmployeeModule, InventoryModule, PosModule, FinanceModule, PerformanceModule, MarketingModule,  // โมดูลอื่น ๆ จะตามมา
  ],
})
export class AppModule {}
