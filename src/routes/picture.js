import { Router } from 'express';

import { createPicture, getPictures } from '../controllers/picture.controller';

import multer from '../libs/multer';

const router = Router();

router
  .route('/pictures')
  .post(multer.single('image'), createPicture)
  .get(getPictures);

export default router;
