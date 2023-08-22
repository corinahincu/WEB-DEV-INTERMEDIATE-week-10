
import axios from "axios";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// SRP - single responsability principal
const getDefinition = async (word) => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    throw error
  }
};

const printData = async (word) => {
  try {
    const json = await getDefinition(word);
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
};

rl.question("Enter a word: ", async (word) => {
  await printData(word);
  rl.close();
});
