
fetch("https://restcountries.com/v2/all").then(res=>res.json()).then(data=>populateCountryNames(data))

function populateCountryNames(country)
{
    let selectbox=document.querySelector("#id_select")
    country.forEach(c=>{
        let countryname=c.name
        let option=document.createElement("option")
        option.value=countryname
        option.text=countryname
        selectbox.append(option)
    })
}

function getdata()
{
    let box=document.querySelector("#id_select")
    let cname=box.value
    fetch(`https://restcountries.com/v3.1/name/${cname}?fullText=true`).then(res=>res.json()).then(data=>getdetails(data))
}
function getdetails(data)
{
        htmldata=``
        data.forEach(c=>{
            htmldata+=`
            <div class="card ms-5 shadow p-3 mb-5 bg-body rounded" style="width: 25rem;">
            <img src="${c.flags["png"]}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"><b>NAME : ${c.name["official"]}</b></h5>
                <p class="card-text"><b>CAPITAL : ${c.capital}</b></p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>CURRENCY : ${c.currencies["INR"]["name"]}</b></li>
                <li class="list-group-item"><b>COUNTINENT : ${c.region}</b></li>
                <li class="list-group-item"><b>REGION : ${c.subregion}</b></li>
                <li class="list-group-item"><b>POPULATION : ${c.population}</b></li>
                <li class="list-group-item"><b>AREA : ${c.area}</b></li>
                <li class="list-group-item"><b>TIME-ZONES : ${c.timezones}</b></li>
            </ul>
            <div class="card-body">
            <button class="btn btn-info">viewmore</button>
            </div>
            </div>
            `
        })
                  
    
    document.querySelector("#result").innerHTML=htmldata
}
// region,subregion,population,flags,name,capital,languages


