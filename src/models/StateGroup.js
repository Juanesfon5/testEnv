import { Schema, model } from 'mongoose';

const stateGroupSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      min: 3
    },
    states: [
      {
        type: Schema.Types.ObjectId,
        ref: 'State'
      }
    ]
  },
  {
    timestamps: true
  }
);

export default model('StateGroup', stateGroupSchema);
