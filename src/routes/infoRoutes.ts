import {Router} from 'express';
import { getInfo } from '../controllers/infoController';

const router = Router();

router.get('/api', getInfo);

export default router;