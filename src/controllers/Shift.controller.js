/* eslint-disable import/prefer-default-export */
import Shift from '../models/Shift';

export async function getShifts(req, res) {
  try {
    const shift = await Shift.find();
    return res.json(shift);
  } catch (err) {
    return res.json(err);
  }
}

export async function createShift(req, res) {
  try {
    const { name, startTime, stopTime, daysOfWeek } = req.body;
    const newShift = {
      name,
      startTime,
      stopTime,
      daysOfWeek,
      workStation: req.params.idworkstation
    };
    const shift = new Shift(newShift);
    await shift.save();
    return res.json({
      message: 'Shift successfully saved',
      newShift
    });
  } catch (err) {
    return res.json(err);
  }
}

export async function getShift(req, res) {
  try {
    const { id } = req.params;
    const shift = await Shift.findById(id);
    return res.json(shift);
  } catch (err) {
    return res.json(err);
  }
}
