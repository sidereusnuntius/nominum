import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response, json } from "express"
import * as cors from "cors";
import { Repository } from "typeorm";
import { Name } from "./entity/Name";
import { NameController } from "./controller/NameController";

function createApp(repo: Repository<Name>) {
	const app = express()
	app.use(cors());
	app.use(bodyParser.json())

	const controller = new NameController(repo);

	app.get("/names", controller.getNames());
	app.post("/names", controller.insertName());
	
	return app;
}

export default createApp;
