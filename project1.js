const fetchResults =async()=>{
    
    let url ='https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid'
    const res=await fetch(url) 
    const data=await res.json()
console.log(data)
 }
fetchResults()
