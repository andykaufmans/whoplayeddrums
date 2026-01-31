# WhoPlayedDrums - Windows Docker Setup

## Prerequisites

### 1. Install Docker Desktop for Windows

1. Go to [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/)
2. Click **"Download for Windows"**
3. Run the installer (`Docker Desktop Installer.exe`)
4. During installation:
   - ✅ Enable **WSL 2** (recommended) OR Hyper-V
   - ✅ Add shortcut to desktop
5. Restart your computer when prompted
6. Launch **Docker Desktop** from Start menu
7. Wait for it to fully start (whale icon in system tray stops animating)

To verify Docker is running, open **PowerShell** or **Command Prompt**:
```
docker --version
```
Should show something like: `Docker version 24.x.x`

---

## Running WhoPlayedDrums

### Option A: Using Docker Compose (Recommended)

**Step 1: Extract the zip file**
- Right-click `whoplayeddrums-mvp.zip`
- Click "Extract All..."
- Choose a location (e.g., `C:\Projects\whoplayeddrums`)

**Step 2: Open PowerShell in that folder**
- Open the extracted folder in File Explorer
- Hold `Shift` + Right-click in empty space
- Click "Open PowerShell window here"

Or open PowerShell and navigate:
```powershell
cd C:\Projects\whoplayeddrums
```

**Step 3: Build and run**
```powershell
docker-compose up --build
```

First run takes 2-3 minutes (downloading Node.js image + installing packages).

You'll see:
```
whoplayeddrums-1  | ▲ Next.js 14.1.0
whoplayeddrums-1  | - Local:        http://localhost:3000
whoplayeddrums-1  | - Ready in 2.1s
```

**Step 4: Open in browser**

Go to: **http://localhost:3000**

🎉 **Done!** Your site is running.

---

### Useful Commands

**Stop the container:**
Press `Ctrl + C` in PowerShell, then:
```powershell
docker-compose down
```

**Start again (without rebuilding):**
```powershell
docker-compose up
```

**Rebuild after changing package.json:**
```powershell
docker-compose up --build
```

**View running containers:**
```powershell
docker ps
```

**View logs:**
```powershell
docker-compose logs -f
```

---

## Option B: Without Docker Compose

If you prefer raw Docker commands:

```powershell
# Build the image
docker build -t whoplayeddrums .

# Run the container
docker run -p 3000:3000 -v ${PWD}/src:/app/src whoplayeddrums
```

---

## Option C: Without Docker (Native npm)

If you'd rather not use Docker:

### 1. Install Node.js

1. Go to [nodejs.org](https://nodejs.org)
2. Download **LTS version** (20.x)
3. Run installer, accept all defaults

Verify in PowerShell:
```powershell
node --version
npm --version
```

### 2. Run the project

```powershell
cd C:\Projects\whoplayeddrums
npm install
npm run dev
```

Open **http://localhost:3000**

---

## Troubleshooting

### "Docker daemon is not running"
- Launch Docker Desktop from Start menu
- Wait for the whale icon to stop animating

### Port 3000 already in use
```powershell
# Find what's using port 3000
netstat -ano | findstr :3000

# Kill that process (replace PID with the number shown)
taskkill /PID <PID> /F
```

Or change the port in docker-compose.yml:
```yaml
ports:
  - "3001:3000"  # Use localhost:3001 instead
```

### Hot reload not working on Windows
The `WATCHPACK_POLLING=true` in docker-compose.yml should fix this. If not:

1. In Docker Desktop, go to Settings → Resources → WSL Integration
2. Enable integration with your WSL distro
3. Restart Docker Desktop

### "EACCES permission denied"
Run PowerShell as Administrator.

---

## File Editing

You can edit files in:
- **VS Code** (recommended): `code .` in the project folder
- **Notepad++**
- Any text editor

Changes to files in `/src` will hot-reload automatically!

---

## Next Steps

Once running, you can:

1. **Browse the site** at http://localhost:3000
2. **Edit drummer data** in `src/data/seed.ts`
3. **Customize styles** in `src/app/globals.css`
4. **Add pages** in `src/app/`

When ready for Supabase, see the main README.md for database setup.
