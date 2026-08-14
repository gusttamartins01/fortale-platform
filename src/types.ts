export type User = {
	id: number;
	name: string;
	email: string;
	phone: string;
	password: string;
	created_at: string;
	updated_at: string;
};

export type ValidationFieldError = {
	field: string;
	message: string;
};

export type Category = {
	id: number;
	name: string;
	description: string;
	created_at: string;
};
export type Place = {
	id: number;
	name: string;
	description: string;
	address: string;
	neighborhood: string;
	latitude: number;
	longitude: number;
	phone: string;
	website: string;
	instagram: string;
	opening_hours: string;
	price_ranger: string;
	is_active: boolean;
	created_at: string;
	update_at: string;
};
