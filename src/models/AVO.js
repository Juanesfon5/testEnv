import { Schema, model } from 'mongoose';

const avoSchema = new Schema(
  {
    avo_num: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      min: 3,
      max: 28
    },
    sequences: {
      type: [Schema.Types.ObjectId],
      ref: 'Sequence'
    },
    liveState: {
      type: Schema.Types.ObjectId,
      ref: 'State'
    }
  },
  {
    timestamps: true
  }
);

export default model('Picture', avoSchema);
