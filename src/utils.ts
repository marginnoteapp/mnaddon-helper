import path from "path"
import fs from "fs-extra"

export function isFileExit(p: string) {
  return fs.existsSync(p)
}

export function thisDir(p: string) {
  return path.resolve(process.cwd(), p)
}

export function isAddonProject(f: () => void | Promise<void>) {
  if (isFileExit(thisDir("./main.js")) && isFileExit(thisDir("mnaddon.json"))) {
    try {
      f()
    } catch (err) {
      console.error(err)
    }
  } else {
    console.log("Not MarginNote Addon Project!")
  }
}
