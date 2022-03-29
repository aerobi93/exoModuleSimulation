import Router, { IRouterContext } from "koa-router";
import { adding, findA, findU, updateU, deleteU } from "../controller/IOT";
const router = new Router()

router.post('IOT', '/IOT/add', async (ctx: IRouterContext) => {
ctx.body = await adding(ctx.request.body)
})

router.get('IOT', '/IOT', async (ctx: IRouterContext) => {
    ctx.body = await findA()
})

router.get('IOT', '/IOT/:id', async (ctx: IRouterContext) => {
    ctx.body = await findU(+ctx.params.id)
})

router.patch('IOT', '/IOT/update/:id', async (ctx: IRouterContext) => {
    ctx.body = await updateU(+ctx.params.id, ctx.request.body)
})

router.delete('IOT', '/IOT/delete/:id', async (ctx: IRouterContext) => {
    ctx.body = await deleteU(+ctx.params.id)
})

router.get('/', async (ctx: IRouterContext) => {
    return ctx.body = 'hello world'
})


export default router