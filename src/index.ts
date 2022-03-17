import Koa from 'koa'
import BodyParser from 'koa-bodyparser';
import Cors from "koa2-cors";
import IOT from './routes/IOT'
import  Type_measure from  './routes/type_measure';




const app = new Koa()
const port = 4000
app
    .use(BodyParser())
    .use(Cors())
    .use(IOT.routes())
    .use(Type_measure.routes())
    .listen( port, async () => {
        console.log(`Server listening on PORT : ${port}`);
      })
