import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
import { Application } from "https://deno.land/x/oak@v10.2.1/mod.ts";

import { router } from "./routes/index.ts";
import { logger } from "./middleware/index.ts";

const { PORT } = config();
const app = new Application();


app.use(logger);
app.use(router.routes());

console.log(`Server up on port ${PORT}`);

await app.listen({ port: Number(PORT) });