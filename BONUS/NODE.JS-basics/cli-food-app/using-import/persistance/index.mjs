
import fs from 'fs'
import map from './map.mjs';


// SAVE TO FILE
export const save = (object, path) => {
  object.type = object.constructor.name
  fs.writeFileSync(path, JSON.stringify(object))
}

// LOAD FROM FILE
export const load = async (path) => {
  let data = JSON.parse(fs.readFileSync(path).toString())
  // pass all the properties

  const module = await import(map[data['type']])
  const Clazz = module[data['type']]
  console.log(Clazz)
  let obj = new Clazz(data.name);
  return obj;
}
// read -> Buffer -> String -> {} - > Food {}

