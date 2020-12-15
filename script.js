 document.getElementById('submit').addEventListener('click', function() {
     let area = new Number(document.getElementById('area').value);
     console.log(area);
     let typesOfProperty = document.querySelector("input[name='type']:checked").value;
     console.log(typesOfProperty);
     let roomNumber = new Number(document.getElementById('room').value);
     console.log(roomNumber);
     let zipCode = new Number(document.getElementById('zip').value);
     console.log(zipCode);
     let landAreaValue = new Number(document.getElementById("land").value);
     console.log(landAreaValue);
     let garden = document.querySelector("input[name='garden']").checked;
     console.log(garden);
     let gardenAreaValue = new Number(document.getElementById("gardenArea").value);
     console.log(gardenAreaValue);
     let equippedkitchen = document.querySelector("input[name='equippedKitchen']").checked;
     console.log(equippedkitchen);
     let swimmingpool = document.querySelector("input[name='swimmingPool']").checked;
     console.log(swimmingpool);
     let furnished = document.querySelector("input[name='furnished']").checked;
     console.log(furnished);
     let openfire = document.querySelector("input[name='openFire']").checked;
     console.log(openfire);
     let terrace = document.querySelector("input[name='terrace']").checked;
     console.log(terrace);
     let terraceAreaValue = new Number(document.getElementById("terraceArea").value);
     console.log(terraceAreaValue);
     let facadesNumberValue = new Number(document.getElementById("facadesNumber").value);
     console.log(facadesNumberValue);
     let buildingState = document.querySelector("input[name='building']:checked").value;
     console.log(buildingState);
     let address = document.getElementById("address").value;
     let arrayAddress = address.split(" ");
     let finalAddress = arrayAddress.join(",");
     console.log(finalAddress);
     let propertysubtype = document.querySelector("input[name='subtype']:checked").value;
     console.log(propertysubtype);

     // data to be sent to the POST request
     let data = {
         data: { // key should be same name as in the JSON file
             "area": area,
             "property-type": typesOfProperty,
             "rooms-number": roomNumber,
             "zip-code": zipCode,
             "land-area": landAreaValue,
             "garden": garden,
             "garden-area": gardenAreaValue,
             "equipped-kitchen": equippedkitchen,
             "swimmingpool": swimmingpool,
             "furnished": furnished,
             "open-fire": openfire,
             "terrace": terrace,
             "terrace-area": terraceAreaValue,
             "facades-number": facadesNumberValue,
             "building-state": buildingState,
             "full-address": finalAddress,
             "property-subtype": propertysubtype
         }
     }
     console.log(data);

     const proxyurl = "https://cors-anywhere.herokuapp.com/";
     const url = "http://cnos4.herokuapp.com/predict";
     fetch(proxyurl + url, {
             method: 'POST',
             body: JSON.stringify(data), // packaging up all of my data and send it as a stringify, the javascrpit object data and make it into a JSON string.
             headers: { // Header is something that can be packaged along with any POST or GET request that's moving between client and server.
                 'Content-Type': 'application/json'
             }
         })
         .then(response => response.json()) // API response to the data sent and convert it into json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
         .then((data) => {
             console.log(data); //print data to console
             console.log(data.prediction); //comes as a string

             let propertyValue = data.prediction.slice(22, -3); //slice the begining and end of the string to keep only the digits 
             console.log(propertyValue);

             propertyValue = new Number(propertyValue); // Transformed digits into a number
             console.log(new Number(propertyValue));

             propertyValue = new Number(propertyValue.toFixed(2)); // Limited decimals to only 2
             console.log(new Number(propertyValue));
             const formatter = new Intl.NumberFormat('de-DE', {
                 style: 'currency',
                 currency: 'EUR',
                 minimumFractionDigits: 0,
                 maximumFractionDigits: 0
             })
             console.log(formatter.format(propertyValue));
             let form = document.getElementById('form');
             form.insertAdjacentHTML("beforeend", "<h2> The Estimated Price of your house is " + propertyValue + " euros</h2>")
                 //alert("The Estimated Price of your house is  " + propertyValue + ' euros');
         })
         .catch(error => {
             console.log('error!'); // catch the error
             console.log(error);
         });
 });