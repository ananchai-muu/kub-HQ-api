import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Expose } from 'class-transformer';

@Schema()
export class Branch extends Document {
  @Expose()
  @Prop({ required: true })
  name: string;
  @Expose()
  @Prop({ required: true })
  status: string;
  @Expose()
  @Prop([Number])
  location: [number, number];

  @Expose()
  @Prop({
    type: {
      district: { type: String, required: true },
      province: { type: String, required: true },
      country: { type: String, required: true },
      postcode: { type: String, required: true },
    },
    required: true,
  })
  address: {
    district: string;
    province: string;
    country: string;
    postcode: string;
  };
  @Expose()
  @Prop({ required: true })
  phone: string;
}

export const BranchSchema = SchemaFactory.createForClass(Branch);

BranchSchema.index({ location: '2dsphere' });
