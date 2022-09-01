import { exec } from "child_process"
import fs from "fs-extra"
import path from "path"

export default function (mnaddon: string, outputName: string | undefined) {
  try {
    const mnaddonPath = path.resolve(process.cwd(), mnaddon)
    if (!fs.existsSync(mnaddonPath)) throw `"${mnaddonPath}" not found`
    outputName =
      outputName ?? path.basename(mnaddonPath, path.extname(mnaddonPath))
    exec(`unzip -d "${outputName}" "${mnaddonPath}"`)
    console.log(`unpack successfully, output to "${outputName}"`)
  } catch (err) {
    console.log(err)
  }
}
