import https from "https";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// SRP - single responsability principal
const getDefinition = (word) => {
  return new Promise( (resolve, reject ) => {
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    https.get(URL, (response) => {
      let data = [];

      response.on("data", (chunk) => data.push(chunk));
      response.on("end", () => {
        let buffer = Buffer.concat(data);
        let json_string = buffer.toString();
        let json = JSON.parse(json_string);

        resolve(json);
      });
      response.on("error", (error) => reject(error));
    });
  })

};

const printData = async ( word ) => {
  try{
    const json = await getDefinition(word)
    console.log(json)
  } catch(error){
    console.error(error.message)
  }
}

rl.question('Enter a word: ', async(word) => {
  await printData(word)
  rl.close()
})

