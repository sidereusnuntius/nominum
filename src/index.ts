import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response, json } from "express"
import { AppDataSource } from "./data-source"
import { Name } from "./entity/Name";
import { NameController } from "./controller/NameController";
import { Routes } from "./routes"

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())

    const repo = AppDataSource.getRepository(Name);
    console.log(await repo.find());
    const controller = new NameController(repo);

    app.get("/names", controller.getNames());
    app.post("/names", controller.insertName());

    app.listen(3000)

    // insert new users for test

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
