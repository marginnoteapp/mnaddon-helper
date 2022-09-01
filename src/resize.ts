import jimp from "jimp"
import path from "path"
import fs from "fs-extra"
export default async function (png: string) {
  try {
    const pngPath = path.resolve(process.cwd(), png)
    if (!fs.existsSync(pngPath)) throw `"${pngPath}" not found`
    const image = await jimp.read(pngPath)
    image.resize(44, 44)
    await image.writeAsync("./logo_44x44.png")
    console.log("resize successfully")
  } catch (e) {
    console.log(e)
  }
}
