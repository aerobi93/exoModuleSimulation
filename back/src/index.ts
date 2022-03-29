import Koa from 'koa'
import BodyParser from 'koa-bodyparser';
import Cors from "koa2-cors";
import IOT from './routes/IOT';
import Measure from './routes/measure';
import  Type_measure from  './routes/type_measure';
import  Log from  './routes/log';

import autoMEasureLog from './autoMEasureLog';

const port = process.env.PORT || 5000

const app = new Koa()
app
    .use(BodyParser())
    .use(Cors({
      origin: "*"
  }))
    .use(IOT.routes())
    .use(Type_measure.routes())
    .use(Measure.routes())
    .use(Log.routes())
    .listen( port, async () => {console.log(port)});

autoMEasureLog()
