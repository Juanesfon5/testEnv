/* eslint-disable import/prefer-default-export */
import Picture from '../models/Picture';

export async function getPictures(req, res) {
  try {
    const pictures = await Picture.find();
    return res.json(pictures);
  } catch (err) {
    return res.json(err);
  }
}

export async function createPicture(req, res) {
  try {
    const { title, description } = req.body;
    const newPicture = { title, description, imagePath: req.file.path };
    const picture = new Picture(newPicture);
    await picture.save();
    return res.json({
      message: 'Picture successfully saved',
      picture
    });
  } catch (err) {
    return res.json(err);
  }
}

export async function getPicture(req, res) {
  try {
    const { id } = req.params;
    const picture = await Picture.findById(id);
    return res.json(picture);
  } catch (err) {
    return res.json(err);
  }
}
