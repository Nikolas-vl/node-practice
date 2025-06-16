import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';

export const generateProducts = async (productsNum) => {
  const productsListJSON = await fs.readFile(PATH_DB);
  const productsList = JSON.parse(productsListJSON);

  for (let i = 0; i < productsNum; i++) {
    const newProduct = createFakeProduct();
    productsList.push(newProduct);
  }
  const newProductsListJSON = JSON.stringify(productsList, null, 2);
  await fs.writeFile(PATH_DB, newProductsListJSON);
};

generateProducts(1);
