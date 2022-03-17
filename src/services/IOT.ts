import { PrismaClient } from "@prisma/client";
import { ImoduleIOT } from "../inteface";


const prisma = new PrismaClient()

export const add = async(data: ImoduleIOT) => {
    
    const adding = prisma.module_IOT.create({
        data 
    })
    return await adding
}

export const findUnique = async(id : number) => {
    const findU =  prisma.module_IOT.findUnique({
        where : {
            id : +id
        },
        include: {
            type_measures :true
        }
       
    })
    return await findU
} 

export const findAll = async() => {
    const findA = prisma.module_IOT.findMany({
        include: {
            type_measures :true
        }
    })
    return await  findA
}

export const update = async(id :number, data : ImoduleIOT) => {
    const UpdateU = prisma.module_IOT.update({
        where: {
            id : +id 
        },
        data
    })
    return await UpdateU
}

export const deleteUnique= async(id : number) => {
    const deleteU = prisma.module_IOT.delete({
        where: {
            id : +id 
        }
    })
    return await deleteU
}