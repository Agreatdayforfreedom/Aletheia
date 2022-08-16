import { Router } from 'express';
import {
	createAletheia,
	deleteAletheia,
	getAletheias,
	updateAletheia,
} from '../controllers/aletheia';

const aletheiaRouter = Router();

aletheiaRouter.get('/', getAletheias);
aletheiaRouter.post('/', createAletheia);
aletheiaRouter.put('/:id', updateAletheia);
aletheiaRouter.delete('/:id', deleteAletheia);

export default aletheiaRouter;
