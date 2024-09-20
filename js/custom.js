let viewCountry = document.getElementById('viewCountry');
let viewRecord = document.getElementById('viewRecord');

fetch('https://restcountries.com/v3.1/all').then(res => res.json()).then((rec) => {

    rec.forEach((data) => {
        
        viewCountry.innerHTML += `<div class="col-lg-6 mt-3">
                                    <div onclick="return viewAlldata('${data.name.common}')" data-bs-toggle="modal" data-bs-target="#countryDtl" class="country p-2 rounded-3 border-top border-3 border-primary shadow bg-danger">
                                        <span>${data.name.common}</span>
                                    </div>
                                  </div>`;
        
    });
}).catch(() => console.log("ERROR"));

async function viewAlldata(name) {
    let response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    let data = await response.json();
    
    let currencies = Object.values(data[0].currencies).map(cur => cur);
    let coatOfArms = data[0].coatOfArms.png ? `<img height="100px" src="${data[0].coatOfArms.png}">` : 'CoatOfArms is not available';
    
    viewRecord.innerHTML = `<tr class="" style="text-align:center">
                                <td>${data[0].name.common}</td>
                                <td>${data[0].capital}</td>
                                <td>${Object.values(data[0].languages)}</td>
                                <td>${currencies[0].name}</td>
                                <td>${currencies[0].symbol}</td>
                                <td><img width="100px" src="${data[0].flags.png}"></td>
                                <td>${coatOfArms}</td>
                            </tr>`;
    
};