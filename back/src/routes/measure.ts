import Router, { IRouterContext } from "koa-router";
import { adding, findA, findU, updateU, deleteU, deleteByM, deleteA } from "../controller/measure";

const router = new Router()
 
router.post('IOT', '/measure/add', async (ctx: IRouterContext) => {
ctx.body = await adding(ctx.request.body)
})

router.get('IOT', '/measure', async (ctx: IRouterContext) => {
    ctx.body = await findA()
})

router.get('IOT', '/measure/:id', async (ctx: IRouterContext) => {
    ctx.body = await findU(+ctx.params.id)
})

router.patch('IOT', '/measure/update/:id', async (ctx: IRouterContext) => {
    ctx.body = await updateU(+ctx.params.id, ctx.request.body)
})

router.delete('IOT', '/measure/delete', async (ctx: IRouterContext) => {
    ctx.body = await deleteA()
})

router.delete('IOT', '/measure/delete/:id', async (ctx: IRouterContext) => {
    ctx.body = await deleteU(+ctx.params.id)
})

router.delete('IOT', '/measure/delete/module/:id', async (ctx: IRouterContext) => {
    ctx.body = await deleteByM(+ctx.params.id)
})


export default router