export const GetPeriod = (()=>{
    try {
      const date = new Date();
      const hr = date.getHours();
   
      if(hr >= 6 && hr < 12) return 'Day'
      if(hr >= 12 && hr < 18) return 'Everning'
      if(hr >= 18) return 'Night'
      if(hr >= 0 && hr < 6 ) return 'Night'
      
    } 
    catch (error) {
        console.log(error)
    }
})

