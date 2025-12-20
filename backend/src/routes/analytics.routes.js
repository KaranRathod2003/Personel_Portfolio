import {Router} from 'express';

import { trackProjectClick } from '../controllers/analytics.controller.js';

const router = Router();

router.post('/project-click', trackProjectClick);

export default router;