# FNM - FIRST NODE MANAGER

step - winget install Schniz.fnm
step - fnm install 22/34/45...

# Environment setup:

Need to add this two file to environment variable

## C:\Users\Amit\AppData\Roaming\fnm\aliases\default

## C:\Users\Amit\AppData\Local\Microsoft\WinGet\Packages\Schniz.fnm_Microsoft.Winget.Source_8wekyb3d8bbwe

# useful command :

For Install : fnm install 22/34/45...
Check Installed Node : fnm ls
Switch Version : fnm use 24

# Need to create Powershell Profile

step-1 : if (-not (Test-Path $profile)) { New-Item $profile -Force }
step-2 : Invoke-Item $profile
step-3 : fnm env --use-on-cd --shell powershell | Out-String | Invoke-Expression ( ADD THIS TO THE TEXT FILE)
