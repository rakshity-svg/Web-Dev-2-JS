function print(num) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(num);
            res();
        }, 1000);
    });
}

print(1)
.then(()=>print(2))
.then(()=>print(3))
.then(()=>print(4))
.then(()=>print(5))

async function fetchData(city) {
    try {
        const API_key = "";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            city
        )}&appid=${API_key}&units=metric`;
        const response = await fetch(url);

        const data = await response.json();
        console.log(city);
        console.log(data.main.temp);
        console.log(data.main.humidity);
    } catch (err) {
        console.error(err);
    }
}
fetchData("london")