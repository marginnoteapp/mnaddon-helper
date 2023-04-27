import { exec, execSync } from "child_process"
import fs from "fs-extra"
import path from "path"
import { thisDir } from "./utils"

export default function (mnaddon: string, certKey: string) {
  try {
    const mnaddonPath = path.resolve(process.cwd(), mnaddon)
    if (!fs.existsSync(mnaddonPath)) throw `"${mnaddonPath}" not found`
    const name = path.basename(mnaddonPath, path.extname(mnaddonPath))
    execSync(`unzip -d "${name}" "${mnaddonPath}"`)
    if (!fs.existsSync(thisDir(`${name}/mnaddon.json`)))
      throw "No mnaddon.json found"
    const mainfest = fs.readJSONSync(thisDir(`${name}/mnaddon.json`))
    fs.writeJSONSync(
      thisDir(`${name}/mnaddon.json`),
      {
        ...mainfest,
        cert_key: certKey
      },
      { spaces: 2 }
    )
    execSync(
      `cd ${name} && zip -qr ${name}_signed.mnaddon * && cd ../ && rm -rf ${name}`
    )
    console.log(`certify successfully, output to "${name}_signed.mnaddon"`)
  } catch (err) {
    console.log(err)
  }
}
