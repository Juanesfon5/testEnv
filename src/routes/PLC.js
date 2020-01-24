import { Router } from 'express';

import { /* createPLC */ getPLCs } from '../controllers/PLC.controller';

const router = Router();

router
  .route('/PLC')
  // .post(, createPLC)
  .get(getPLCs);

router.post('/pictures/:id');

export default router;
