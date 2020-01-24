import { Schema, model } from 'mongoose';

const wkGroupSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'The name of the work station group is missing'],
      trim: true,
      min: [3, 'The name of the work station must have at least 4 characters']
    },
    workstations: [
      {
        type: Schema.Types.ObjectId,
        ref: 'WorkStation'
      }
    ]
  },
  {
    timestamps: true
  }
);

export default model('WorkStationGroup', wkGroupSchema);
