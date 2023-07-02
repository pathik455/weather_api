const input = document.getElementById('input-location');
const button = document.getElementById('search-button');

const loc = document.getElementById('Location');
const tim = document.getElementById('Time');
const temp = document.getElementById('Temprature');


async function getData(cityName){
   const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=b1a2ab98ce3b41f49cb164110233006&q=${cityName}&aqi=yes`) 
   return await promise.json();
}

button.addEventListener("click", async () =>{
    const cname = input.value;
    const result = await getData(cname);
    // console.log(result);
    loc.innerText = `Location: ${result.location.name}, ${result.location.region}, ${result.location.country}`;
    tim.innerText = `Time: ${result.current.last_updated}`;
    temp.innerText = `Temprature: ${result.current.temp_c} °C`;
    
})
