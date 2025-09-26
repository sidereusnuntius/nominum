import { AppDataSource } from "./data-source"
import { Name } from "./entity/Name";
import createApp from "./app";

AppDataSource.initialize().then(async () => {
    const repo = AppDataSource.getRepository(Name);

    const app = createApp(repo);
    app.listen(3000);

    console.log("Listening on port 3000.");

}).catch(error => console.log(error))
