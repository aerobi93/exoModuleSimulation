export const dayFr = (day) => {
    let newday = ''
  
    if (day = 0) {
     return newday = 'dimanche'
    }
    if (day = 1) {
     return  newday = 'lundi'
    }
    if (day = 2) {
      newday = 'mardi'
    }
    if (day = 3) {
      return newday = 'mercredi'
    }
    if (day = 4) {
      return newday = 'jeudi'
    }
    if (day = 5) {
      return newday = 'vendredi'
    }
    if (day = 6) {
     return  newday = 'samedi'
    }
    return newday
  }

 export const monthFr = (month) => {
    let newMonth =''
    if (month = 0) {
      return newMonth = 'janvier'
    }
    if (month = 1) {
      return newMonth = 'fevrier'
    }
    if (month = 2) {
      return  newMonth = 'mars'
    }
    if (month = 3) {
      return  newMonth = 'avril'
    }
    if (month = 4) {
      return  newMonth = 'mai'
    }
    if (month = 5) {
        newMonth = 'juin'
    }
    if (month = 6) {
      return  newMonth = 'juillet'
    }
    if (month = 7) {
      return  newMonth = 'aout'
    }
    if (month = 8) {
      return  newMonth = 'septembre'
    }
    if (month = 9) {
      return  newMonth = 'octobre'
    }
    if (month = 10) {
      return  newMonth = 'novembre'
    }
    if (month = 11) {
      return  newMonth = 'decembre'
    }
    return newMonth
  }

export const DatePesonalise = (date) => {
    let newDate = new Date(date)
    let dateConvert = dayFr(newDate.getDay()) + ' ' + newDate.getDate() + ' ' 
      + monthFr(newDate.getMonth()) + ' ' + newDate.getFullYear() + ' a ' + newDate.getHours() + 'h: ' + newDate.getMinutes() + 'min' 
    return dateConvert
    
}