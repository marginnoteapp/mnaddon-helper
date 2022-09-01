import chokidar from "chokidar"
import fs, { emptyDirSync, ensureDirSync } from "fs-extra"
import os from "os"
import path from "path"
import { thisDir } from "./utils"

export default function () {
  const mnaddon = fs.readJsonSync(thisDir("mnaddon.json"))
  const folder = `${os.homedir()}/Library/Containers/QReader.MarginStudyMac/Data/Library/MarginNote Extensions/${
    mnaddon.addonid
  }`
  ensureDirSync(folder)
  emptyDirSync(folder)
  console.log("copyed to " + folder)
  console.log("watching...")
  chokidar.watch(thisDir("*.{js,json,png}")).on("all", (e, p) => {
    console.log(e, path.basename(p))
    fs.copyFileSync(p, `${folder}/${path.basename(p)}`)
  })
}
