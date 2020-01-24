/* eslint-disable import/prefer-default-export */
import State from '../models/State';

export async function getStates(req, res) {
  try {
    const state = await State.find();
    return res.json(state);
  } catch (err) {
    return res.json(err);
  }
}

export async function createState(req, res) {
  try {
    const { name, inUse } = req.body;
    const newState = {
      name,
      inUse,
      workstations: [req.params.idworkstation]
    };
    const state = new State(newState);
    await state.save();
    return res.json({
      message: 'State successfully saved',
      newState
    });
  } catch (err) {
    return res.json(err);
  }
}

export async function getState(req, res) {
  try {
    const { id } = req.params;
    const state = await State.findById(id);
    return res.json(state);
  } catch (err) {
    return res.json(err);
  }
}
