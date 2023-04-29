import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

import Designer from '../models/designersModel.js';
const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);
  await User.deleteMany({});
  const createdUsers = await User.insertMany(data.users);

  await Designer.deleteMany({});
  const createdDesigners = await Designer.insertMany(data.designers);
  res.send({ createdProducts, createdUsers, createdDesigners });
});

export default seedRouter;
