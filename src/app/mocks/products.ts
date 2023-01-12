export const product = () => {

	const product = ['Laptop', 'Phone', 'Tablet', 'Camera', 'Headphones', 'TV', 'Watch', 'Speaker', 'Keyboard', 'Mouse'][Math.floor(Math.random() * 10)]

	return {
			id: Math.random().toString(36).substr(2, 9),
			name: product, 
			description: `${product} Description`,
			price: Number((Math.random() * 1000).toFixed(2)),
			image: `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}}`
			}
}

export const generateProducts = (min: number, max: number) => {
	const numberOfProducts = Math.floor(Math.random() * (max - min + 1)) + min;
	return Array(numberOfProducts).fill(null).map(() => product());
}

