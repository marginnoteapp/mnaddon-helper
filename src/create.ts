import fs from "fs-extra"
import path from "path"
import { fileURLToPath } from "url"
import { thisDir } from "./utils"

export default function (projectName: string) {
  try {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    fs.copySync(
      path.resolve(__dirname, "../template/"),
      thisDir(`./${projectName}`)
    )
    console.log(
      `create project successfully, you can run "cd ${projectName}" to enter this project`
    )
  } catch (error) {
    console.log(error)
  }
}
