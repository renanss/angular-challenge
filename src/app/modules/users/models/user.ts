import { Product } from "../interface/product";

export class User {
	public id: string;
	public name: string;
	public email: string;
	public phone: string;
	public purchased_products?: Product[];
}