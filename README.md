<h1 align="center" style="margin-top: 10px;">.mnaddon Helper</h1>
<p align="center">
  <b>A helper for mnaddon development</b>
</p>

<p align="center">
  <a href="https://github.com/marginnoteapp/mnaddon-helper/network/members"><img src="https://img.shields.io/github/forks/marginnoteapp/mnaddon-helper.svg?style=flat" alt="forks"></a>
  <a href="https://github.com/marginnoteapp/mnaddon-helper/stargazers"><img src="https://img.shields.io/github/stars/marginnoteapp/mnaddon-helper.svg?style=flat" alt="stars"></a>
  <a href="https://github.com/marginnoteapp/mnaddon-helper/blob/main/package.json"><img src="https://img.shields.io/badge/version-v1.0.1-orange" alt="version"></a>
  <a href="https://github.com/marginnoteapp/mnaddon-helper/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green" alt="license"></a>
</p>

## Usage
> ⚠️ Only support Mac and Marginnote for Mac must be installed.
#### Install First
```shll
npm i mnaddon -g
# Or Yarn
yarn add mnaddon -g
# Or Pnpm
pnpm add mnaddon -g
```
#### Then

You can use `mnaddon help` or `mnaddon help restart` to get more information.

```shll
Usage: mnaddon command [options]
  $ mnaddon create template
  $ mnaddon resize ./logo.png -o new
  $ mnaddon watch
  $ mnaddon restart
  $ mnaddon dev
  $ mnaddon build
  $ mnaddon unpack ./template.mnaddon -o output

Options:
  -v, --version                    output the current version
  -h, --help                       display help for command

Commands:
  create <project-name>            create a simple mnaddon project
  resize [options] <png-path>      resize logo to 44x44, which is required by MarginNote
  watch                            watch the file changes and copy changed file to the MarginNote extensition foler
  restart [options]                restart MarginNote and skip the unsign alert
  dev                              open MarginNote and Console, and then watch file changes
  build [output-name]              build a mnaddon file
  unpack [options] <mnaddon-path>  unpack a mnaddon file
  help [command]                   display help for command
```
## License

<a href="https://github.com/marginnoteapp/ohmymn/blob/main/LICENSE">MIT</a> © <a href="https://github.com/marginnoteapp"><img src="https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic/mn.png?x-oss-process=base_webp" alt="MarginNote" width="80"></a>