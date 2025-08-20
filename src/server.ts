import express from 'express';
import productRouter from '#routes/product.route.ts';

const app = express();

const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use('/product', productRouter);

app.listen(PORT, () => {
	console.log(`Server is listening at http://localhost:${PORT}. 🚀`);
});
