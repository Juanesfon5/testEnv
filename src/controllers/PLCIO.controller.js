/* eslint-disable import/prefer-default-export */
import PLCIO from '../models/PLCIO';

export async function getPLCIOs(req, res) {
  try {
    const plcIOs = await PLCIO.find();
    return res.json(plcIOs);
  } catch (err) {
    return res.json(err);
  }
}

export async function createPLCIO(req, res) {
  try {
    const { name, type, signal } = req.body;
    const newPLCIO = { name, type, signal };
    const plcIO = new PLCIO(newPLCIO);
    await plcIO.save();
    return res.json({
      message: 'Picture successfully saved',
      plcIO
    });
  } catch (err) {
    return res.json(err);
  }
}

export async function getPLCIO(req, res) {
  try {
    const { id } = req.params;
    const plcIO = await PLCIO.findById(id);
    return res.json(plcIO);
  } catch (err) {
    return res.json(err);
  }
}
