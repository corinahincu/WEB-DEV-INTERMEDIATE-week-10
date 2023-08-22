import https from 'https'

// SRP - single responsability principal
const getDefinition = (word) => {
  const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

  // axios                - promise
  // node-fetch           - promise
  // http client (native) - callback + events

  //       este un incomming message: 
  //                    v

  return new Promise((resolve, reject) => {
    https.get(URL, (response) => {
      let data = [];

      /* data = [ // < Array ]
        [1,2,3,4 ... , n ] << Uint8Array
        [1,2,3 ... , n ] << Uint8Array
        [1,2 ] << Uint8Array
        */

      response.on("data", chunk => data.push(chunk));
      response.on("end", () => {
        let buffer = Buffer.concat(data);
        let json_string = buffer.toString();
        let json = JSON.parse(json_string);
        /* console.log(json) */
        resolve(json); // strong coupling
        // where to next? nu in functia curenta, fiindca scopul functiei acestei e to get definition
        // how ? rs depinde de abordarea in care lucram, daca lucram prin cb , atunci folosim argument. daca lucram prin promise ---> solve,reject. Iar daca lucrez prin promise async/await ---> return
      });
      response.on("error", error => reject(error));
    });
  });

}



const printData = (json) => {
  console.log(json)
}





/////////////////////////////////
// 1. usage as callbacks
/* getDefinition("hello", printData) */

// 2. usage as Promise
/* getDefinition('hello')
  .then(json => printData(json))
  .catch(error => console.error(error)) */

// 3. async / await
/* try {
  let json = await getDefinition("hello")
  console.log(json)
} catch (error){
  console.error("ERROR!:", error)
} */

while(1){
  getDefinition("hello")
    .then(json => printData(json))
    .catch(error => console.error("ERROR!:", error))
  console.log("THE END!")
}
