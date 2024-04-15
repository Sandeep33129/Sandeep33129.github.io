
const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

document.addEventListener("DOMContentLoaded", function() {
    async function populateTableRows() { 
        await fetch('https://api.openweathermap.org/data/2.5/weather?q=dublin,ie&units=metric&APPID=bc425ac2188d406c884f4fdd88b339f0')
            .then(response => {
                if (response.status !== 200) {
                    console.log('Error Status Code: ' + response.status);
                    return;
                }
                response.json().then((data) => {	
                    // Test if data is being received
                    console.log(data);
                    let strTableRows = `<tr>
                    <td><span>Summary</span></td>
                    <td>${data["weather"][0]["description"]}</td>
                </tr>
                <tr>
                <td><span>Temperature</span></td>
                <td>${data["main"]["temp"] + "°C"}</td>
            </tr>
            <tr>
            <td><span>Humidity</span></td>
            <td>${data["main"]["humidity"] + " %"}</td>
        </tr>
        <tr>
        <td><span>Pressure</span></td>
        <td>${data["main"]["pressure"] + " Pa"}</td>
    </tr>`;
                    document.querySelector("#table-weather-dublin tbody").innerHTML = strTableRows;
                });
            })
            .catch(error => {
                console.log("Data not found");
            });
    }

    populateTableRows(); // Call the function when DOM content is loaded
});
function change_background() {
    let d = new Date();
    let n = d.getHours();
    if (n > 23 || n <= 6) {
        document.querySelector(".theme-js").style.backgroundImage  ="url('assets/img/dublin-night.jpg')";
    } else {
        document.querySelector(".theme-js").style.backgroundImage  ="url('assets/img/dublin-day.jpg')";
    }
}

// Call the change_background function
change_background();