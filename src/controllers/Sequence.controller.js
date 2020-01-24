/* eslint-disable import/prefer-default-export */
import Sequence from '../models/Sequence';

export async function getSequences(req, res) {
  try {
    const sequences = await Sequence.find();
    return res.json(sequences);
  } catch (err) {
    return res.json(err);
  }
}

export async function createSequence(req, res) {
  try {
    const { startTS, stopTS } = req.body;
    const durationMin = Math.abs(stopTS - startTS);
    const newSequence = {
      startTS,
      stopTS,
      durationMin,
      state: req.params.idstate,
      avo: req.params.idavo
    };
    const sequence = new Sequence(newSequence);
    await sequence.save();
    return res.json({
      message: 'Sequence successfully saved',
      sequence
    });
  } catch (err) {
    return res.json(err);
  }
}

export async function getSequence(req, res) {
  try {
    const { id } = req.params;
    const sequence = await Sequence.findById(id);
    return res.json(sequence);
  } catch (err) {
    return res.json(err);
  }
}
