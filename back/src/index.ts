import Koa from 'koa'
import BodyParser from 'koa-bodyparser';
import Cors from "koa2-cors";
import IOT from './routes/IOT';
import Measure from './routes/measure';
import  Type_measure from  './routes/type_measure';
import  Log from  './routes/log';


const app = new Koa()
const port = 4000
app
    .use(BodyParser())
    .use(Cors({
      origin: "*"
  }))
    .use(IOT.routes())
    .use(Type_measure.routes())
    .use(Measure.routes())
    .use(Log.routes())
    .listen( port, async () => {
        console.log(`Server listening on PORT : ${port}`);
      })
