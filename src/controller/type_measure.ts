import { PrismaClient} from "@prisma/client";
import { findmany, add, updateU, deleteA } from "../services/type_measure"; 
import { Itype_mesasure } from "../inteface";

const prisma = new PrismaClient()

export const findAll = async() => {
    await findmany()
    try{
        return findmany()
    }
    catch(e) {
        return e
    }
    finally {
        prisma.$disconnect
    }
}

export const adding = async(data : Itype_mesasure) => {
    await add(data)
    try{
        return 'enregistrement effectué'
    }
    catch(e) {
        return e
    }
    finally {
        prisma.$disconnect
    }
}

export const update = async(id : number, data:Itype_mesasure) => {
    await updateU(id, data)
    try{
        return 'mise a jour effectué'
    }
    catch(e) {
        return e
    }
    finally {
        prisma.$disconnect
    }
}
export const deleteType = async(id : number) => {
    await deleteA(+id)
    try{
        return 'supression effectué'
    }
    catch(e) {
        return e
    }
    finally {
        prisma.$disconnect
    }
}