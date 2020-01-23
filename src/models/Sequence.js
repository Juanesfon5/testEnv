import { Schema, model } from 'mongoose';

const sequenceSchema = new Schema({
  startTS: {
    type: Date,
    required: true
  },
  stopTS: {
    type: Date,
    required: true
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
