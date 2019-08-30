import vendor from '../controllers/vendor';
import express from 'express';

const vendorRouter = express.Router();

vendor.post('/vendors', vendor.createVendor);
vendor.put('/vendors/:id', vendor.updateVendor);
vendor.delete('/vendors/:id', vendor.delete);

export default vendorRouter;