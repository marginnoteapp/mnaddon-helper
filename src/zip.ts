import { exec } from "child_process"
import fs from "fs-extra"
import { thisDir } from "./utils"

export default function (outputName: string | undefined) {
  const mnaddon = fs.readJsonSync(thisDir("mnaddon.json"))
  outputName =
    outputName ??
    `${mnaddon.addonid.split(".")[2]} v${mnaddon.version}`.replace(/[ .]/g, "_")
  exec(`zip -qr ${outputName}.mnaddon *.{js,json,png}`)
}
