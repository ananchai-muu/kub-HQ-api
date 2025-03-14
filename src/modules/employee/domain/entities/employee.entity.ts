import { Schema, Types } from 'mongoose';

export class Employee {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  position: string;
  branchId: Types.ObjectId;
  salary: number;
  workingHours: number;
  startDate: Date;
  status: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    position: string,
    branchId: Types.ObjectId,
    salary: number,
    workingHours: number,
    startDate: Date,
    status: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.position = position;
    this.branchId = branchId;
    this.salary = salary;
    this.workingHours = workingHours;
    this.startDate = startDate;
    this.status = status;
  }
}

// Mongoose Schema
export const EmployeeSchema = new Schema<Employee>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String },
  position: { type: String },
  branchId: { type: Schema.Types.ObjectId, ref: 'Branch', required: true },
  salary: { type: Number, required: true },
  workingHours: { type: Number },
  startDate: { type: Date, required: true },
  status: { type: String, required: true },
});
