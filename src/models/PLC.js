import { Schema, model } from 'mongoose';

const plcSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'The name of the PLC is missing'],
      trim: true,
      min: [4, 'The name of the PLC must be at least 4 charaacters long']
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
