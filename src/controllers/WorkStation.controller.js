/* eslint-disable import/prefer-default-export */
import WorkStation from '../models/Workstation';

export async function getWorkStations(req, res) {
  try {
    const workStations = await WorkStation.find();
    return res.json(workStations);
  } catch (err) {
    return res.json(err);
  }
}

export async function createWorkStation(req, res) {
  try {
    const { name, workStationType, inUse, locked } = req.body;
    const newWorkStation = {
      name,
      workStationType,
      inUse,
      locked,
      shifts: [req.params.idshift]
    };
    const workStation = new WorkStation(newWorkStation);
    await workStation.save();
    return res.json({
      message: 'WorkStation successfully saved',
      workStation
    });
  } catch (err) {
    return res.json(err);
  }
}

export async function getWorkStation(req, res) {
  try {
    const { id } = req.params;
    const workStation = await WorkStation.findById(id);
    return res.json(workStation);
  } catch (err) {
    return res.json(err);
  }
}
