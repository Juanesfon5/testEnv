import { Schema, model } from 'mongoose';

const avoSchema = new Schema(
  {
    avoNum: {
      type: String,
      unique: true,
      required: [true, 'AVO number is missing'],
      trim: true,
      min: [3, 'AVO number must be at least 3 characters long'],
      max: [28, 'AVO number must have less than 28 characters']
    },
    sequences: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Sequence'
      }
    ],
    liveState: {
      type: Schema.Types.ObjectId,
      ref: 'State'
    }
  },
  {
    timestamps: true
  }
);

export default model('AVO', avoSchema);
