
import { createInterface } from "readline"

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("What do you want?", (input) => {
  console.log("Your input was ", input, typeof input)
})