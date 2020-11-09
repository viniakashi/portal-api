import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => {
  response.json({ status: 'OK Teste 1234' });
});

export default router;
