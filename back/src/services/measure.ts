import { PrismaClient } from "@prisma/client";
import { Imeasure } from "../interface";

const prisma = new PrismaClient();

export const add = async (data : Imeasure) => {
    const adding = prisma.measure.create({
        data
    })
    return await adding
}

export const findUnique = async(id : number ) => {
    const findU = prisma.measure.findUnique({
        where: {
            id,
        }
    })
    return await findU
}

export const findAll = async() => {
    const findA = prisma.measure.findMany( )
    return await findA
}

export const update = async (id: number, data : Imeasure) => {
    const updateU = prisma.measure.update({
        data, 
        where: {
            id
        }
    })
    return await updateU
}

export const deleteUnique = async(id: number) => {
    const deleteU = prisma.measure.delete({
        where: {
            id
        }
    })
    return await deleteU
}

export const deleteByModule = async(id: number) => {
    const deleteBM = prisma.measure.deleteMany({
        where: {
            module_id: id
        }
    })
    return await deleteBM
}

export const deleteAll = async() => {
    const deleteA = prisma.measure.deleteMany({})
    return await deleteA
}