export type ValidationFieldError = {
	field: string;
	message: string;
};

export type Role = {
	id: number;
	name: string;
};

export type User = {
	id: number;
	name: string;
	email: string;
	phone?: string | null;
	password?: string;
	created_at: Date | string;
	updated_at: Date | string;
};

export type Category = {
	id: number;
	name: string;
	description?: string | null;
	created_at: Date | string;
};

export type Place = {
	id: number;
	name: string;
	description?: string | null;
	address?: string | null;
	neighborhood?: string | null;
	latitude?: number | null;
	longitude?: number | null;
	phone?: string | null;
	website?: string | null;
	instagram?: string | null;
	opening_hours?: string | null;
	price_ranger?: string | null;
	is_active: boolean;
	created_at: Date | string;
	updated_at: Date | string;
};

export type PlaceCategory = {
	place_id: number;
	category_id: number;
};

export type Event = {
	id: number;
	place_id: number;
	category_id: number;
	title: string;
	description?: string | null;
	start_date: Date | string;
	end_date?: Date | string | null;
	start_time?: string | null;
	end_time?: string | null;
	price?: number | null;
	created_at: Date | string;
	updated_at: Date | string;
};

export type Favorite = {
	id: number;
	user_id: number;
	place_id: number;
	created_at: Date | string;
};

export type Review = {
	id: number;
	user_id: number;
	place_id: number;
	rating: number;
	comment?: string | null;
	created_at: Date | string;
	updated_at: Date | string;
};

export type PlaceImage = {
	id: number;
	place_id: number;
	url: string;
	is_cover: boolean;
	created_at: Date | string;
};
