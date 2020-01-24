/* eslint-disable import/prefer-default-export */
import AVO from '../models/AVO';

export async function getAVOs(req, res) {
  try {
    const avos = await AVO.find();
    return res.json(avos);
  } catch (err) {
    return res.json(err);
  }
}

export async function getAVO(req, res) {
  const { id } = req.params;
  const avo = await AVO.findById(id);
  return res.json(avo);
}
