/* eslint-disable import/prefer-default-export */
import PLC from '../models/PLC';

export async function getPLCs(req, res) {
  try {
    const plcs = await PLC.find();
    return res.json(plcs);
  } catch (err) {
    return res.json(err);
  }
}

export async function createPLC(req, res) {
  try {
    const { name } = req.body;
    const newPLC = {
      name,
      plcIO: [req.params.idplcIO],
      workStation: req.params.idworkstation
    };
    const plc = new PLC(newPLC);
    await plc.save();
    return res.json({
      message: 'PLC successfully saved',
      plc
    });
  } catch (err) {
    return res.json(err);
  }
}

export async function getPLC(req, res) {
  try {
    const { id } = req.params;
    const plc = await PLC.findById(id);
    return res.json(plc);
  } catch (err) {
    return res.json(err);
  }
}
