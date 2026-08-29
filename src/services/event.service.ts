import { NotFoundError } from '../errors/index.ts';
import prisma from '../lib/prisma.ts';
import type { CreateEvent, UpdateEvent } from '../schemas/event.schema.ts';
import type { Event } from '../types.ts';

export async function findAllEvents(): Promise<Event[]> {
	const events = await prisma.event.findMany();

	return events;
}

export async function findEventById(id: number): Promise<Event> {
	const event = await prisma.event.findUnique({
		where: { id }
	});

	if (!event) throw new NotFoundError(`Event with ID ${id} not found.`);

	return event;
}

export async function insertEvent(data: CreateEvent): Promise<Event> {
	return await prisma.event.create({
		data
	});
}

export async function modifyEvent(id: number, data: UpdateEvent) {
	await findEventById(id);

	return await prisma.event.update({
		where: { id },
		data
	});
}

export async function removeEvent(id: number): Promise<void> {
	await findEventById(id);

	await prisma.event.delete({
		where: { id }
	});
}
