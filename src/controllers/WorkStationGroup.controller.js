/* eslint-disable import/prefer-default-export */
import WorkStationGroup from '../models/WorkstationGroup';

export async function getWorkStationGroups(req, res) {
  try {
    const workStationGroups = await WorkStationGroup.find();
    return res.json(workStationGroups);
  } catch (err) {
    return res.json(err);
  }
}

export async function createWorkStationGroup(req, res) {
  try {
    const { name } = req.body;
    const newWorkStationGroup = {
      name,
      workstations: [req.params.idworkstations]
    };
    const workStationGroup = new WorkStationGroup(newWorkStationGroup);
    await workStationGroup.save();
    return res.json({
      message: 'WorkStationGroup successfully saved',
      workStationGroup
    });
  } catch (err) {
    return res.json(err);
  }
}

export async function getWorkStationGroup(req, res) {
  try {
    const { id } = req.params;
    const workStationGroup = await WorkStationGroup.findById(id);
    return res.json(workStationGroup);
  } catch (err) {
    return res.json(err);
  }
}
