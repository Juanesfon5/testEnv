import { Schema, model } from 'mongoose';

const stateSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'The name of the state is missing'],
      trim: true,
      min: [3, 'The name of the state must have at least 3 characters']
    },
    inUse: {
      type: Boolean,
      default: true
    },
    workstations: [
      {
        type: Schema.Types.ObjectId,
        ref: 'WorkStation'
      }
    ]
    /* stateGroup : {
      type: Schema.Types.ObjectId,
      ref: 'StateGroup' 
    } */
  },
  {
    timestamps: true
  }
);

export default model('State', stateSchema);
