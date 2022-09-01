import { copySync } from "fs-extra"
import path from "path"
import { thisDir } from "./utils"

export default function (projectName: string) {
  try {
    copySync(
      path.resolve(__dirname, "../template/"),
      thisDir(`./${projectName}`)
    )
    console.log(`create project ${projectName} success`)
  } catch (error) {
    console.log(error)
  }
}
