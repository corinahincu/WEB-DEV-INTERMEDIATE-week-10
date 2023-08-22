import https from "https";

// SRP - single responsability principal
const getDefinition = (word, callback) => {
  const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    https.get(URL, (response) => {
      let data = [];

      response.on("data", (chunk) => data.push(chunk));
      response.on("end", () => {
        let buffer = Buffer.concat(data);
        let json_string = buffer.toString();
        let json = JSON.parse(json_string);

        callback(json); 

      });
      response.on("error", (error) => callback(error));
    });

};

const printData = (error,json) => {
  if(error){
    console.error("ERROR", error)
  } else {
    console.log(json);
  }
};

getDefinition("hello", printData)

