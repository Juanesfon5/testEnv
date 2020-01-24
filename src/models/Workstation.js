import { Schema, model } from 'mongoose';

const workStationSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'The name of the work station is missing'],
      trim: true,
      min: [4, 'The name of the work station must have at least 4 characters']
    },
    workStationType: {
      type: String,
      enum: ['TF', 'HT'],
      default: 'TF'
    },
    inUse: {
      type: Boolean,
      required: [true, 'Must declare if the workstation is in use'],
      default: false // true?
    },
    locked: {
      type: Boolean,
      required: true,
      default: false
    },
    shifts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Shift'
      }
    ]
    /* workStationGroup: {
      type: Schema.Types.ObjectId,
      ref: 'WorkStationGroup'
    },
    liveState: {
      type: Schema.Types.ObjectId,
      ref: 'State'
    },
    avo: {
      type: Schema.Types.ObjectId,
      ref: 'AVO'
    },
    picture: {
      type: Schema.Types.ObjectId,
      ref: 'Picture'
    } */
  },
  {
    timestamps: true
  }
);

export default model('WorkStation', workStationSchema);
