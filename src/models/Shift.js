import { Schema, model } from 'mongoose';

// const getTime = date => date.toLocaleTimeString('en-US');

const shiftSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'The name of the shift is missing'],
      trim: true,
      min: [3, 'The name of the shift must have at least 3 characters']
    },
    startTime: {
      type: Date,
      required: [true, 'The starting time of the shift is missing']
      // get: getTime
    },
    stopTime: {
      type: Date,
      required: [true, 'The ending time of the shift is missing']
      // get: getTime
    },
    daysOfWeek: {
      type: [String],
      enum: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      default: ['Mon'],
      required: [true, 'No weekdays for the shift']
    },
    workStation: {
      type: Schema.Types.ObjectId,
      ref: 'WorkStation',
      required: [true, 'Shift not assigned to a work station']
    }
  },
  {
    timestamps: true
  }
);

// TODO create virtual function to get duration Time
// TODO create getter function to get only time from startTime and stopTime

export default model('Shift', shiftSchema);
