import { PrismaClient } from "@prisma/client";
import { Ilog} from "../interface";

const prisma = new PrismaClient();

export const add = async (data : Ilog) => {
    const adding = prisma.log.create({
        data
    })
    return await adding
}

export const findUnique = async(id : number ) => {
    const findU = prisma.log.findUnique({
        where: {
            id
        }
    })
    return await findU
}

export const findAll = async() => {
    const findA = prisma.log.findMany()
    return await findA
}

export const update = async (id: number, data : Ilog) => {
    const updateU = prisma.log.update({
        data, 
        where: {
            id
        }
    })
    return await updateU
}

export const deleteUnique = async(id: number) => {
    const deleteU = prisma.log.delete({
        where: {
            id
        }
    })
    return await deleteU
}

export const deleteByModule = async(id: number) => {
    const deleteBM = prisma.log.deleteMany({
        where: {
            module_id: id
        }
    })
    return await deleteBM
}

export const deleteAll = async() => {
    const deleteA = prisma.log.deleteMany({})
    return await deleteA
}