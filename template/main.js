;(function () {
  const zh = {
    confirm: "确定",
    cancel: "取消"
  }
  const en = {
    confirm: "OK",
    cancel: "Cancel"
  }
  const Addon = {
    name: "Template",
    key: "template"
  }
  const lang = isZH() ? zh : en
  function isZH() {
    return (
      NSLocale.preferredLanguages().length &&
      NSLocale.preferredLanguages()[0].startsWith("zh")
    )
  }
  const console = {
    log(obj) {
      JSB.log(`${Addon.key} %@`, obj)
    }
  }
  const popup = (title, message, buttons = [lang.confirm]) => {
    return new Promise(resolve =>
      UIAlertView.showWithTitleMessageStyleCancelButtonTitleOtherButtonTitlesTapBlock(
        title,
        message,
        0,
        lang.cancel,
        buttons,
        (alert, buttonIndex) => {
          resolve({
            option: buttonIndex - 1
          })
        }
      )
    )
  }
  JSB.newAddon = () => {
    const showHUD = (text, duration = 2) => {
      self.app.showHUD(text, self.window, duration)
    }
    const go = async () => {
      const { option } = await popup(
        "Template Popup",
        "Whether to view the Chinese development documents (old version, new version is not updated)?"
      )
      if (option === -1) return
      self.app.openURL(
        NSURL.URLWithString(encodeURI("http://docs.test.marginnote.cn/"))
      )
    }
    return JSB.defineClass(
      Addon.name + ": JSExtension",
      {
        sceneWillConnect() {
          self.status = false
          self.app = Application.sharedInstance()
          self.studyController = self.app.studyController(self.window)
        },
        queryAddonCommandStatus() {
          return self.studyController.studyMode !== 3
            ? {
                image: "logo_44x44.png",
                object: self,
                selector: "onToggle:",
                checked: self.status
              }
            : null
        },
        async onToggle() {
          self.status = true
          self.studyController.refreshAddonCommands()
          await go()
          self.status = false
          self.studyController.refreshAddonCommands()
        }
      },
      {}
    )
  }
})()
