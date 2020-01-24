import { Router } from 'express';

import { getAVOs, getAVO } from '../controllers/AVO.controller';

const router = Router();

router.route('/avo').get(getAVOs);

// router.post('/avo/:idavo', createAVO);

router.get('/avo/:idavo', getAVO);

export default router;
