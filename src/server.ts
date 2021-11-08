import { serverHttp } from "./app";

serverHttp.listen(4000,'localhost', ()=> console.log(`🚀Server is running on port 4000`))