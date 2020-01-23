import { Schema, model } from 'mongoose';

const plcIOSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      min: 3,
      max: 28
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
