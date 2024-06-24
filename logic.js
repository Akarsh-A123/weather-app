function whether(){
    console.log(data.value)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.value}&appid=5fe36b192ffd1c36dffb6752bc1722b2`).then((data)=>{
        data.json().then((data)=>{
            console.log(data)
            const obj=new Date()
            hrs=obj.getHours()
            min=obj.getMinutes()
            date=obj.getDate()
            mont=obj.getMonth()
            day=obj.getDay()
            a=''
            if(hrs>12){
                a='PM'
            }
            else{
                a='AM'
            }
            switch(day){
                case 0:day='Sunday'
                break;
                case 1:day='Monday'
                break;
                case 2:day='Tuesday'
                break;
                case 3:day='Wednesday'
                break;
                case 4:day='Thursday'
                break;
                case 5:day='Friday'
                break;
            }
            switch(mont){
                case 0:mont='Jan'
                break;
                case 1:mont='Feb'
                break;
                case 2:mont='Mar'
                break;
                case 3:mont='Aprl'
                break;
                case 4:mont='May'
                break;
                case 5:mont='Jun'
                break;
                case 6:mont='Jul'
                break;
                case 7:mont='Aug'
                break;
                case 8:mont='Sep'
                break;
                case 9:mont='Oct'
                break;
                case 10:mont='Nov'
                break;
                case 11:mont='Dec'
                break;
            }

            result.innerHTML=`<h2 class="mb-4 text-light">Weather Details</h2>
                    <h3 class="mb-3">Feels Like <span class="me-5">${Math.round(data.main.feels_like-273.15)} C</span></h3>
                    <h3 class="mb-3">Humidity <span class="me-5">${data.main.humidity}%</span></h3>
                    <h3 class="mb-3">Wind <span class="me-5">${data.wind.speed} km/h</span></h3>
                    <h3 class="mb-3">Pressure <span class="me-5">${data.main.pressure} hpa</span></h3>
                    <h3 class="mb-3">Visibility <span class="me-5">${data.visibility/1000} km</span></h3>
                    <hr style="width:90%">`

            result2.innerHTML=`<h1 class="me-1 mb-2">${Math.round(data.main.temp-273.15)}<sup>o</sup></h1>
                <h2 class="mb-3">${data.name}<br>
                <span>${hrs}:${min} ${a},${day},${date} ${mont}</span></h2>
                <h3 class='fs-5 ms-4  mb-4 text-center'><img src='http://openweathermap.org/img/w/10d.png'><br>
                ${data.weather[0].main}
                </h3>`
                console.log(data.weather[0].main)
            if(data.weather[0].main=='Rain'){
                
                bdy.style.backgroundImage="url('https://i.gifer.com/7oJu.gif')"
            }
            else if(data.weather[0].main=='Clouds'){
                 bdy.style.backgroundImage="url('./clouds.gif')"
            }
            else if(data.weather[0].main=='Snow'){
                bdy.style.backgroundImage="url('./winter.gif')"
           }
           else if(data.weather[0].main=='Snow'){
                bdy.style.backgroundImage="url('./sunny.gif')"
           }
        })
    })
}