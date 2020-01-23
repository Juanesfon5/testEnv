import { Schema, model } from 'mongoose';

const plcSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      min: 4
    },
    plcIO: [
      {
        type: Schema.Types.ObjectId,
        ref: 'PLCIO'
      }
    ],
    workStation: {
      type: Schema.Types.ObjectId,
      ref: 'WorkStation'
    }
  },
  {
    timestamps: true
  }
);

export default model('PLC', plcSchema);
