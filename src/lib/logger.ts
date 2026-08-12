import pino from 'pino';

const isDevelopment = process.env.NODE_ENV !== 'production';

const logger = pino({
	level: process.env.LOG_LEVEL ?? 'info',
	transport: isDevelopment ? { target: 'pino-pretty' } : undefined
});

export default logger;
