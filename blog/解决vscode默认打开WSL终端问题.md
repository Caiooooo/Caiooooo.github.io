### **解决 VSCode 默认打开无限启动 WSL 终端的问题**

在使用 VSCode 时，部分用户可能会遇到  **每次打开 VSCode 终端都会默认进入 WSL** ，而不是 `cmd` 或 `PowerShell`。如果你希望 VSCode 终端默认使用 Windows 终端（如 `PowerShell` 或 `cmd`），而不是 WSL，可以按照以下方法进行调整。

---

## **问题原因**

VSCode 终端的默认行为受到 **“Use WSL Profiles”** 选项的影响。如果该选项被启用，VSCode 会优先使用 WSL 作为默认终端。

该选项在 **VSCode 设置** 中的路径为：

```
Terminal › Integrated: Use Wsl Profiles
```

如果该选项被勾选，VSCode 终端将默认使用 WSL 运行。

---

## **解决方法: 在 VSCode 设置中取消 "Use WSL Profiles"**

1. **打开 VSCode 设置** （快捷键 `Ctrl + ,`）。
2. **搜索 `Use WSL Profiles`** 。
3. 找到 `Terminal › Integrated: Use WSL Profiles` 选项，并  **取消勾选** 。
4. 关闭 VSCode 并重新打开，默认终端应恢复为 Windows 终端（`cmd` 或 `PowerShell`）。

## **总结**

如果 VSCode 默认打开 WSL 终端，可以通过以下方法解决：

✅ **取消勾选** `Terminal › Integrated: Use WSL Profiles` 选项。

按照以上方法，你的 VSCode 终端就不会默认进入 WSL 了！ 🎯
