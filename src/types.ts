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
	password: string;
	roleId: number;
	createdAt: Date | string;
	updatedAt: Date | string;
};

export type Category = {
	id: number;
	name: string;
	description?: string | null;
	createdAt: Date | string;
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
	openingHours?: string | null;
	priceRange?: string | null;
	isActive: boolean;
	createdAt: Date | string;
	updatedAt: Date | string;
};

export type PlaceCategory = {
	placeId: number;
	categoryId: number;
};

export type Event = {
	id: number;
	placeId: number;
	categoryId: number;
	title: string;
	description?: string | null;
	startDate?: Date | string;
	endDate?: Date | string | null;
	startTime?: string | null;
	endTime?: string | null;
	price?: number | null;
	createdAt: Date | string;
	updatedAt: Date | string;
};

export type Favorite = {
	id: number;
	userId: number;
	placeId: number;
	updatedAt: Date | string;
};

export type Review = {
	id: number;
	userId: number;
	placeId: number;
	rating: number;
	comment?: string | null;
	createdAt: Date | string;
	updatedAt: Date | string;
};

export type PlaceImage = {
	id: number;
	placeId: number;
	imageUrl: string;
	isCover: boolean;
	createdAt: Date | string;
};
