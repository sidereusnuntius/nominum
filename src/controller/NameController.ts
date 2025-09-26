import { Repository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import { Name } from "../entity/Name";

export class NameController {
	private nameRepository;

	constructor(nameRepo) {
		console.log(nameRepo);
		this.nameRepository = nameRepo;
	}

	getNames() {
		console.log(this.nameRepository);
		return async (req: Request, res: Response, next: NextFunction) => {
			try {
				const names = await this.nameRepository.find();
				res.send(JSON.stringify(names))
			} catch (e) {
				next(e);
			}
		};
	}

	insertName() {
		return async (req: Request, res: Response, next: NextFunction) => {
			if (!req.body || req.body.name.trim().length === 0) {
				next(new Error("invalid name"));
				return;
			}

			try {
				await this.nameRepository.save(req.body);
				res.status(201);
				res.send();
			} catch (e) {
				next(e);
			}
		}
	}
}
