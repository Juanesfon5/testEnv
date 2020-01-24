/* eslint-disable import/prefer-default-export */
import StateGroup from '../models/StateGroup';

export async function getStateGroups(req, res) {
  try {
    const stateGroups = await StateGroup.find();
    return res.json(stateGroups);
  } catch (err) {
    return res.json(err);
  }
}

export async function createStateGroup(req, res) {
  try {
    const { name } = req.body;
    const newStateGroup = { name, states: [req.params.idstates] };
    const stateGroup = new StateGroup(newStateGroup);
    await stateGroup.save();
    return res.json({
      message: 'StateGroup successfully saved',
      StateGroup
    });
  } catch (err) {
    return res.json(err);
  }
}

export async function getStateGroup(req, res) {
  try {
    const { id } = req.params;
    const stateGroup = await StateGroup.findById(id);
    return res.json(stateGroup);
  } catch (err) {
    return res.json(err);
  }
}
