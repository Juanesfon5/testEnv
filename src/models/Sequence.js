import { Schema, model } from 'mongoose';

const sequenceSchema = new Schema({
  startTS: {
    type: Date,
    required: [true, 'The initial time of the sequence is missing']
  },
  stopTS: {
    type: Date,
    required: [true, 'The final time of the sequence is missing']
  },
  durationMin: {
    type: Number
  },
  state: {
    type: Schema.Types.ObjectId,
    ref: 'State'
  },
  avo: {
    type: Schema.Types.ObjectId,
    ref: 'AVO'
  }
});

export default model('Sequence', sequenceSchema);
