

async function myApi(cit){
    const defaultCity = "Pune";
    const city = cit && cit.trim().length > 0 ? cit : defaultCity; // Use defaultCity if input is empty
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2b6d1cbf40msh8db6fa19a7a7de1p139be9jsn13728c6db21e',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();

        console.table(result.location);
        console.table(result.current);
        
        // console.log(result.current);
        

        // Feelslike_c.innerHTML = result.cureent.feelslike_c


        cityName.innerHTML = city

        city.textContent = result.location.name;
        city2.textContent = result.location.name;
        region.textContent = result.location.region;
        country.textContent = result.location.country;


        Temp_c.innerHTML = result.current.temp_c
        Temp_c2.innerHTML = result.current.temp_c
        Wind_mph.innerHTML = result.current.wind_mph
        Wind_mph21.innerHTML = result.current.wind_mph
        Wind_dir.innerHTML = result.current.wind_dir
        Pressure_in.innerHTML = result.current.pressure_in
        Humidity.innerHTML = result.current.humidity
        
        
        Temp_c6.innerHTML = result.current.temp_c
        Humidity7.innerHTML = result.current.humidity
        Wind_mph8.innerHTML = result.current.wind_mph
        condition9.textContent = result.current.condition.text;

    } catch (error) {
        console.error(error);
    }
}
myApi();

getWeatherBtn.addEventListener("click", (e) => {
    e.preventDefault();
    myApi(cityVal.value);
})


// async function myApi() {
//     const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Aurangabad';
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '2b6d1cbf40msh8db6fa19a7a7de1p139be9jsn13728c6db21e',
//             'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
//         }
//     };
    
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json(); // Parse response as JSON
        
//         console.log(result); // Log response to understand its structure
        
//         // Update the HTML content with data
//         document.getElementById("city").textContent = result.location.name;
//         document.getElementById("region").textContent = result.location.region;
//         document.getElementById("country").textContent = result.location.country;
//         document.getElementById("temperature").textContent = result.current.temp_c + "°C";
//         document.getElementById("humidity").textContent = result.current.humidity + "%";
//         document.getElementById("wind").textContent = result.current.wind_mph + " mph";
//         document.getElementById("condition").textContent = result.current.condition.text;

//     } catch (error) {
//         console.error("Error fetching weather data:", error);
//     }
// }

// myApi();
