import { Request, Response } from 'express';
import { AppDataSource } from '../database';
import { Aletheia } from '../entities/Aletheia';

const aletheiaRepo = AppDataSource.getRepository(Aletheia);

export const getAletheias = async (request: Request, response: Response) => {
	try {
		const allAletheia = await aletheiaRepo.find();
		response.json(allAletheia);
	} catch (error) {
		if (error instanceof Error) {
			response.status(500).json(error.message);
		}
	}
};
export const createAletheia = async (request: Request, response: Response) => {
	try {
		const newAletheia = new Aletheia();
		newAletheia.content = request.body.content;
		const aletheiaSaved = await aletheiaRepo.save(newAletheia);
		response.status(201).json(aletheiaSaved);
	} catch (error) {
		if (error instanceof Error) {
			response.status(500).json(error.message);
		}
	}
};

export const updateAletheia = async (request: Request, response: Response) => {
	try {
		const [aletheia] = await aletheiaRepo.find({
			where: { id: parseInt(request.params.id) },
		});
		if (!aletheia) {
			const err: Error = new Error('Aletheia not found');
			return response.status(404).json({ message: err.message });
		}
		aletheia.content = request.body.content || aletheia.content;

		const aletheiaUpdated = await aletheiaRepo.save(aletheia);
		response.json(aletheiaUpdated);
	} catch (error) {
		if (error instanceof Error) {
			response.status(500).json(error.message);
		}
	}
};

export const deleteAletheia = async (request: Request, response: Response) => {
	try {
		const [aletheia] = await aletheiaRepo.find({
			where: { id: parseInt(request.params.id) },
		});

		if (!aletheia) {
			const err: Error = new Error('Aletheia not found');
			return response.status(404).json({ message: err.message });
		}
		await aletheiaRepo.delete(aletheia.id);
		response.sendStatus(204);
	} catch (error) {
		if (error instanceof Error) {
		}
	}
};
