import express from 'express';
import userRoutes from './routes/users';
import vendorRoutes from './routes/vendors';
import categoryRoutes from './routes/assetgroup';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(userRoutes);
app.use(vendorRoutes);
app.use(categoryRoutes);


export default app;
