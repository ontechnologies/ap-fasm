import category from '../controllers/assetCategory';
import express from 'express';


const categoryRouter = express.Router();

categoryRouter.post('/category', category.createcategory);
categoryRouter.put('/category/:id', category.updatecategory);
categoryRouter.delete('/category/:id', category.deletecategory);

export default categoryRouter;