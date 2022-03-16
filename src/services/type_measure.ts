import { PrismaClient } from "@prisma/client";
import { Itype_mesasure } from "../inteface";

const prisma = new PrismaClient()

export const findmany = async () => {
    const findAll  = prisma.type_measure.findMany({})
    return findAll
}

export const add = async(data : Itype_mesasure) =>  {
    const adding =  await prisma.type_measure.create({
        data
    })
    return  await adding
   }


export const updateU = async(id: number, data : Itype_mesasure) => {
    const deleteId  = await prisma.type_measure.update({
        where : {
           id : +id
        },
        data 
    })
    return await updateU
   }

   
export const deleteA = async(id :number) => {
 const deleteId  = await prisma.type_measure.delete({
     where : {
        id : +id
     }
 })
 return await deleteId
}
