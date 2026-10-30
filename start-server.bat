@echo off
cd /d "%~dp0"
title Learnify Dashboard Local & Network Server

echo ========================================================
echo        Starting Learnify Dashboard Local Server
echo ========================================================

for /f "tokens=*" %%i in ('powershell -NoProfile -Command "(Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.InterfaceAlias -notlike '*Loopback*' -and $_.IPAddress -notlike '169.254*' -and $_.IPAddress -notlike '172.*' } | Select-Object -ExpandProperty IPAddress -First 1)"') do set LOCAL_IP=%%i

if "%LOCAL_IP%"=="" (
    set LOCAL_IP=127.0.0.1
)

echo.
echo   Local Address:   http://localhost:3456/
echo   Network Address: http://%LOCAL_IP%:3456/
echo.
echo   [TIP] Share the Network Address with other devices on your Wi-Fi/LAN!
echo ========================================================
echo.

start http://localhost:3456

where npx >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo Starting server with npx http-server (-c-1 --cors on port 3456)...
    npx -y http-server -p 3456 -c-1 --cors -a 0.0.0.0
) else (
    echo Starting server with Python on port 3456...
    python -m http.server 3456 --bind 0.0.0.0
)

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Server stopped or encountered an error.
    pause
)
