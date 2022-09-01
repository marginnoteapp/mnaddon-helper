import jimp from "jimp"
import path from "path"
import fs from "fs-extra"
export default async function (png: string, outputName: string | undefined) {
  try {
    const pngPath = path.resolve(process.cwd(), png)
    if (!fs.existsSync(pngPath)) throw `"${pngPath}" not found`
    const image = await jimp.read(pngPath)
    image.resize(44, 44)
    outputName = outputName ?? "logo_44x44"
    await image.writeAsync(outputName + ".png")
    console.log(`resize successfully, output to ${outputName}.png`)
  } catch (e) {
    console.log(e)
  }
}
