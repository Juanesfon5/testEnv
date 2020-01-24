import { Schema, model } from 'mongoose';

const stateGroupSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'The name of the state is missing'],
      trim: true,
      min: [3, 'The name of the state group must have at least 3 characters']
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
