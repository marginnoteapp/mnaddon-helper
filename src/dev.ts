import watch from "./watch"
import { runAppleScriptSync } from "run-applescript"

export default function () {
  watch()
  const script = `
  on openMN()
    tell application "MarginNote 3" to activate
    delay 3
    tell application "System Events"
      tell process "MarginNote 3"
        key code 36
      end tell
    end tell
  end openMN

  on openConsole()
    tell application "Console" to activate
  end openConsole

  on isRunning(appName)
    tell application "System Events"
      return (name of processes contains appName)
    end tell
  end isRunning

  on isActive(appName)
    tell application "System Events"
      return (name of first process whose frontmost is true) contains appName
    end tell
  end isActive

  if isRunning("MarginNote 3") then
    tell application "MarginNote 3" to activate
    repeat until isActive("MarginNote 3")
      delay 0.1
    end repeat
    tell application "MarginNote 3" to quit
    repeat while isRunning("MarginNote 3")
      delay 0.1
    end repeat
    openMN()
  else
    openMN()
  end if

  if not isRunning("Console") then
    openConsole()
  end if
  `
  runAppleScriptSync(script)
}
