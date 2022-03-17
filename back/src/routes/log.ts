import Router, { IRouterContext } from "koa-router";
import { adding, findA, findU, updateU, deleteU } from "../controller/log";
const router = new Router()

router.post('IOT', '/log/add', async (ctx: IRouterContext) => {
ctx.body = await adding(ctx.request.body)
})

router.get('IOT', '/log', async (ctx: IRouterContext) => {
    ctx.body = await findA()
})

router.get('IOT', '/log/:id', async (ctx: IRouterContext) => {
    ctx.body = await findU(+ctx.params.id)
})

router.patch('IOT', '/log/update/:id', async (ctx: IRouterContext) => {
    ctx.body = await updateU(+ctx.params.id, ctx.request.body)
})

router.delete('IOT', '/log/delete/:id', async (ctx: IRouterContext) => {
    ctx.body = await deleteU(+ctx.params.id)
})


export default router