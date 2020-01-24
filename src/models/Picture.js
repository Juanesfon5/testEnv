import { Schema, model } from 'mongoose';

const pictureSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: [true, 'Title is missing'],
      trim: true,
      min: [3, "The picture's title must be at least 3 characetrs long"],
      max: [28, "The picture's title must have less than 28 characters"]
    },
    description: {
      type: String,
      trim: true,
      min: [3, "The picture's description must be at least 3 characetrs long"],
      max: [32, "The picture's description must have less than 28 characters"]
    },
    imagePath: {
      type: String,
      unique: true,
      required: [true, 'Image path is missing'],
      min: [4, 'Image path must be at least 4 characetrs long']
    }
  },
  {
    timestamps: true
  }
);

export default model('Picture', pictureSchema);
