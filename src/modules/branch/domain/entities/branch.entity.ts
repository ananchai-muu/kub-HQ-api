export class BranchEntity {}
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Branch extends Document {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  phone: string;

  @Prop()
  status: string;
}

export const BranchSchema = SchemaFactory.createForClass(Branch);
