import { DatabaseSync } from 'node:sqlite';
import { productModel } from '#models/product.model.ts';

const database = new DatabaseSync('./src/database/database.db');

database.exec(productModel);

export { database };
