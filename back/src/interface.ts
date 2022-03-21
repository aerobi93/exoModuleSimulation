export interface Itype_mesasure {
   value: string,

}

export interface ImoduleIOT {
   name : string,
   typeMeasure_id : number,
   power? : boolean
   limit : number
}

export interface Imeasure {
   value : number,
   module_id : number

}
export interface Ilog {
 restart? : boolean,
 dysfunction?: boolean,
 surcharge? :boolean,
 module_id: number,
}