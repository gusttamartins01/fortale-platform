import type { Request, Response } from 'express';
import type { CreateEvent, UpdateEvent } from '../schemas/event.schema.ts';
import * as EventService from '../services/event.service.ts';

export async function getAllEvents(_request: Request, response: Response) {
	const events = await EventService.findAllEvents();

	response.status(200).json(events);
}

export async function getEventById(request: Request, response: Response) {
	const id = Number(request.params.id);

	const event = await EventService.findEventById(id);

	response.status(200).json(event);
}

export async function createEvent(request: Request, response: Response) {
	const body = request.body as CreateEvent;

	const event = await EventService.insertEvent(body);

	response.status(201).json(event);
}

export async function updateEvent(request: Request, response: Response) {
	const id = Number(request.params.id);
	const body = request.body as UpdateEvent;

	const event = await EventService.modifyEvent(id, body);

	response.status(200).json(event);
}

export async function deleteEvent(request: Request, response: Response) {
	const id = Number(request.params.id);

	await EventService.removeEvent(id);

	response.status(204).send();
}
