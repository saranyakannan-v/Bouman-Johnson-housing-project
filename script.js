 document.getElementById('submit').addEventListener('click', function() {
     let area = new Number(document.getElementById('area').value);
     console.log(area);
     let typesOfProperty = document.querySelector("input[name='type']:checked").value;
     console.log(typesOfProperty);
     let roomNumber = new Number(document.getElementById('room').value);
     console.log(roomNumber);
     let zipCode = new Number(document.getElementById('zip').value);
     console.log(zipCode);

     // data to be sent to the POST request
     let data = {
         data: { // it should be same name as in the JSON 
             "area": area,
             "property-type": typesOfProperty,
             "rooms-number": roomNumber,
             "zip-code": zipCode
         }
     }
     console.log(data);

     const proxyurl = "https://cors-anywhere.herokuapp.com/";
     const url = "http://cnos.herokuapp.com/predict";
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