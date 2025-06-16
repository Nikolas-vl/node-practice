import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';

const addOneProduct = async () => {
  const productsJSON = await fs.readFile(PATH_DB);
  const products = JSON.parse(productsJSON, null, 2);
  const newProduct = createFakeProduct();
  products.push(newProduct);
  await fs.writeFile(PATH_DB, JSON.stringify(products, null, 2));
  return newProduct;
};

addOneProduct();
