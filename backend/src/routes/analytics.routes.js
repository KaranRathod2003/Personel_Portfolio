import {Router} from 'express';

import { trackProjectClick } from '../controllers/analytics.controller';

const router = Router();

router.post('/project-click', trackProjectClick);

export default router;