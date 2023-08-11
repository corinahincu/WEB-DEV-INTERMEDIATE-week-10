
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function printMenu(menuList, cb) {
  menuList.forEach((item) => console.log(item.print()))
  let option = -1;
  rl.question("Choose >>", (option) => {
    cb(option);
  });
}

export function printMessage(message) {
  console.log(`${message} >>`);
}
