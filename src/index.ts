#! /usr/bin/env node
import resize from "./resize"
import watch from "./watch"
import build from "./build"
import create from "./create"
import dev from "./dev"
import restart from "./restart"
import pkg from "../package.json"

import { Command } from "commander"
import { isAddonProject } from "./utils"
import unpack from "./unpack"
import certify from "./certify"

const program = new Command()
program
  .name("mnaddon-lite")
  .usage(
    `command [options]
  $ mnaddon-lite create template
  $ mnaddon-lite resize ./logo.png
  $ mnaddon-lite watch
  $ mnaddon-lite restart
  $ mnaddon-lite dev
  $ mnaddon-lite build
  $ mnaddon-lite unpack ./template.mnaddon -o ./output`
  )
  .version(pkg.version, "-v, --version", "output the current version")

program
  .command("create <project-name>")
  .description("create a simple mnaddon project")
  .action(projectName => {
    create(projectName)
  })
program
  .command("resize <png-path>")
  .option("-o, --output <output-name>")
  .description("resize logo to 44x44, which is required by MarginNote")
  .action((pngPath, { output }) => {
    resize(pngPath, output)
  })
program
  .command("watch")
  .description(
    "watch the file changes and copy changed file to the MarginNote extensition foler"
  )
  .action(() => {
    isAddonProject(() => {
      watch()
    })
  })
program
  .command("restart")
  .option("-w, --wait", "wait some seconds to skip unsign alert", "3")
  .option(
    "-l, --location <location>",
    "open location while mn opened, such as notebook or note url"
  )
  .description("restart MarginNote and skip the unsign alert")
  .action(({ wait, location }) => {
    restart(wait, location)
  })
program
  .command("dev")
  .description("open MarginNote and Console, and then watch file changes")
  .action(() => {
    isAddonProject(() => {
      dev()
    })
  })
program
  .command("build [output-name]")
  .description("build a mnaddon file")
  .action(outputName => {
    isAddonProject(() => {
      build(outputName)
    })
  })

program
  .command("unpack <mnaddon-path>")
  .option("-o, --output <output-name>")
  .description("unpack a mnaddon file")
  .action((mnaddonPath, { output }) => {
    unpack(mnaddonPath, output)
  })

program
  .command("certify <mnaddon-path> <cert-key>")
  .description("certify a mnaddon file with cert key")
  .action((mnaddonPath, certKey) => {
    certify(mnaddonPath, certKey)
  })

program.parse(process.argv)
