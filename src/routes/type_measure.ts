import Router, { IRouterContext } from "koa-router";
import { adding ,  findAll, update,  deleteType} from "../controller/type_measure";

const router = new Router()

router.get('/type_measure', async (ctx : IRouterContext )=> {
    ctx.body = await findAll()
})
router.post('/type_measure/add', async (ctx : IRouterContext )=> {
    ctx.body = await adding(ctx.request.body)
})

router.patch('/type_measure/update/:id', async (ctx : IRouterContext )=> {
    ctx.body = await update(+ctx.params.id, ctx.request.body)
})

router.delete('/type_measure/delete/:id', async (ctx : IRouterContext )=> {
    ctx.body = await deleteType(+ctx.params.id)
})

export default router