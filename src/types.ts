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
