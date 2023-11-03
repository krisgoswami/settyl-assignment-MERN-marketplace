import express from 'express';
import { authenticateJWT } from '../utils/jwsAuth.js'
import { createItem, createUser, deleteItem, listedItems, purchase, purchasedItems, updateItem, userLogin } from '../controllers/userController.js';


const router = express.Router();

router.post('/signup', createUser);
router.post('/login', userLogin);
router.post('/create-item', authenticateJWT, createItem);
router.post('/listed-items', authenticateJWT, listedItems);
router.put('/update-item/:id', authenticateJWT, updateItem);
router.delete('/delete-item/:id', authenticateJWT, deleteItem);
router.post('/purchase/:id', authenticateJWT, purchase);
router.get('/purchased-items', authenticateJWT, purchasedItems);

export default router;