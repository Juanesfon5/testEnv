import { Schema, model } from 'mongoose';

const plcIOSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'The name of I/O device is missing'],
      trim: true,
      min: [3, 'The name of I/O device must be at least 3 characters long'],
      max: [28, 'The name of I/O device must have less than 28 characters']
    },
    type: {
      type: String,
      enum: ['Input', 'Output'],
      default: 'Input'
    },
    signal: {
      type: String,
      enum: ['Analog', 'Digital', 'Relay']
    }
  },
  {
    timestamps: true
  }
);

export default model('PLCIO', plcIOSchema);
