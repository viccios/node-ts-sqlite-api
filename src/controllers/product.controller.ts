import type { Request, Response } from 'express';
import { database } from '#config/database.ts';
import type { Product } from '#types/product.ts';

const DECIMAL = 10;

export function getAllProducts(_: Request, res: Response) {
	const query = database.prepare(
		`
    SELECT products.name, products.category, products.amount
    FROM products;
    `,
	);

	const products = query.all();

	if (products.length === 0) {
		return res.status(404).json({ error: 'No products found' });
	}

	res.status(200).json(products);
}

export function getProductById(req: Request, res: Response) {
	const id = parseInt(req.params.id, DECIMAL);

	if (!id) {
		return res
			.status(401)
			.json({ error: 'The id field cannot be empty and must be a number' });
	}

	const query = database.prepare(
		`
    SELECT products.name, products.category, products.amount
    FROM products
    WHERE products.rowid = ?;
    `,
	);

	const product = query.get(id);

	if (!product) {
		return res.status(404).json({ error: 'Product not found' });
	}

	res.status(200).json(product);
}

export function createProduct(req: Request, res: Response) {
	const { name, category, price, amount }: Product = req.body;

	if (!name || !category || !price || !amount) {
		return res.status(401).json({ error: 'All fields are required' });
	}

	if (typeof price !== 'number' || typeof amount !== 'number') {
		return res
			.status(401)
			.json({ error: 'The "price" and "amount" fields must be a number' });
	}

	const insert = database.prepare(
		`
    INSERT INTO products (name, category, price, amount)
    VALUES (?, ?, ?, ?);
    `,
	);

	const newProduct = insert.run(name, category, price, amount);

	res.status(201).json({
		message: 'Product created successfully',
		productId: newProduct.lastInsertRowid,
	});
}

export function updateProduct(req: Request, res: Response) {
	const id = parseInt(req.params.id, DECIMAL);
	const { name, category, price, amount }: Product = req.body;

	if (!id) {
		return res
			.status(401)
			.json({ error: 'The id field cannot be empty and must be a number' });
	}

	if (!name || !category || !price || !amount) {
		return res.status(401).json({ error: 'All fields are required' });
	}

	if (typeof price !== 'number' || typeof amount !== 'number') {
		return res
			.status(401)
			.json({ error: 'The "price" and "amount" fields must be a number' });
	}

	const query = database.prepare(
		`
    UPDATE products
    SET name = ?, category = ?, price = ?, amount = ?
    WHERE rowid = ?;
    `,
	);

	const updatedProduct = query.run(name, category, price, amount, id);

	if (updatedProduct.changes === 0) {
		return res.status(404).json({ error: 'Product not found' });
	}

	res.status(200).json({ message: 'Product updated successfully' });
}

export function deleteProduct(req: Request, res: Response) {
	const id = parseInt(req.params.id, DECIMAL);

	if (!id) {
		return res
			.status(401)
			.json({ error: 'The id field cannot be empty and must be a number' });
	}

	const query = database.prepare(
		`
    DELETE FROM products
    WHERE rowid = ?;
    `,
	);

	const deletedProduct = query.run(id);

	if (deletedProduct.changes === 0) {
		return res.status(404).json({ error: 'Product not found' });
	}

	res.status(200).json({ message: 'Product deleted successfully' });
}
