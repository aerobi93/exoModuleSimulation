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
     let id = await randomF() 
    let dataIOT: any = await findU(id)
    if (dataIOT.power) {
      let random =Math.floor(Math.random() * (100 - 0 +1)) + 0;
      let beug = Math.floor(Math.random() * (100 - 0 +1)) + 0;
  
      let data =  {
        module_id : id, 
        value: random
      }
      if (  random < dataIOT.limit_min &&  random > dataIOT.limit_min) {
        let dataLog =  {
          module_id : id, 
          surcharge: true
        }
        await AddLog(dataLog)
      }
     
      if (beug == 50) {
        let dataLog =  {
          module_id : id, 
          dysfunction: true
        } 
       await AddLog(dataLog)
        if(await AddLog(dataLog)) {
          setInterval(() => {
            if (dataIOT.power) {
              let random = Math.floor(Math.random() * (100 - 0 +1)) + 0

              if (random >= 0 && random <= 25){
                let  data = {
                  power :false,
                  name : dataIOT.name,
                  limit_min :dataIOT.limit_min,
                  limit_max :dataIOT.limit_max,
                  localisation :dataIOT.localisation,
                  typeMeasure_id: dataIOT.typeMeasure_id
                }
                updateU(id, data)
              }
              if (random >= 25 && random <= 50 ) { 
                AddLog(dataLog)
              }
              else {
                let restart = {
                    module_id : id,
                    restart : true
                } 
                clearInterval
                AddLog(restart) 
              }
            }
          }, 1000 * 60 * 60 )
        }  
      }
    return  await addMeasure(data)
    }
   
  
  }, 1000 * 60 * 60 * 4 )
}
export default autoMeasure_log