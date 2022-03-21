import { countModules, updateU, findU  } from './controller/IOT';
import { adding  as addMeasure} from './controller/measure';
import { adding  as AddLog} from './controller/log';




const autoMeasure_log = () => {
    const randomF = async() => {
    let max: any   = await countModules()
    let min  = 1
    let numRandom =await  Math.floor(Math.random() * (max - min +1)) + min;
    return numRandom
  }
  setInterval( async() => {
    let random =Math.floor(Math.random() * (500 - 0 +1)) + 0;
    let beug = Math.floor(Math.random() * (100 - 0 +1)) + 0;
    let id = await randomF() 
    let dataIOT: any = await findU(id)
    let data =  {
      module_id : id, 
      value: random
    }
    if (dataIOT.limit) {
      let dataLog =  {
        module_id : id, 
        surcharge: true
      }
      await AddLog(dataLog)
    }
   
    if (beug == 50) {
      let dataLog =  {
        module_id : id, 
        dysfonction: true
      } 
      await AddLog(dataLog)
      if(await AddLog(dataLog)) {
        setInterval(() => {
            let random = Math.floor(Math.random() * (100 - 0 +1)) + 0
          if (random == 50) {
            let  data = {
              power :false,
              name : dataIOT.name,
              limit :dataIOT.limit,
              typeMeasure_id: dataIOT.typeMeasure_id
            }
             updateU(id, data)
          }
          if (random >= 15 && random < 25 ) { 
            AddLog(dataLog)
          }
          else {
            let restart = {
                module_id : id,
                restart : true
            } 
            AddLog(restart) 
          }
        }, 1000)
      }  
    }
  
   return  await addMeasure(data)
  }, 1000 * 5)
}
export default autoMeasure_log