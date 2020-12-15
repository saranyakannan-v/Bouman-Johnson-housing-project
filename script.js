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
     let garden = document.querySelector("input[name='garden']:checked").checked;
     console.log(garden);
     let gardenAreaValue = new Number(document.getElementById("gardenArea").value);
     console.log(gardenAreaValue);
     let equippedkitchen = document.querySelector("input[name='equippedKitchen']:checked").checked;
     console.log(equippedkitchen);
     let swimmingpool = document.querySelector("input[name='swimmingPool']:checked").checked;
     console.log(swimmingpool);
     let furnished = document.querySelector("input[name='furnished']:checked").checked;
     console.log(furnished);
     let openfire = document.querySelector("input[name='openFire']:checked").checked;
     console.log(openfire);
     let terrace = document.querySelector("input[name='terrace']:checked").checked;
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
         .then(response => response.json()) // convert to json
         .then(contents => console.log(contents)) //print data to console
         .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?")) // Catch errors

 });