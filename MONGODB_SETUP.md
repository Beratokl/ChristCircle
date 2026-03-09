# MongoDB Setup for Windows

## Option 1: MongoDB as Windows Service (Recommended for Development)

### Installation Steps

1. **Download MongoDB Community Server**
   - Go to https://www.mongodb.com/try/download/community
   - Select Windows version
   - Download the MSI installer

2. **Run the Installer**
   - Double-click the .msi file
   - Choose "Complete" installation
   - **Important:** Check "Install MongoDB as a Service"
   - Service Name: MongoDB
   - Data Directory: C:\Program Files\MongoDB\Server\7.0\data
   - Log Directory: C:\Program Files\MongoDB\Server\7.0\log

3. **Verify Installation**
   ```powershell
   # Check if MongoDB service is running
   Get-Service MongoDB
   
   # Should show: Status = Running
   ```

4. **Test Connection**
   ```powershell
   # Connect to MongoDB
   mongosh
   
   # You should see MongoDB shell prompt
   ```

5. **Update Your .env File**
   ```env
   MONGODB_URI=mongodb://localhost:27017/christcircle
   ```

### Managing the Service

```powershell
# Start MongoDB
Start-Service MongoDB

# Stop MongoDB
Stop-Service MongoDB

# Restart MongoDB
Restart-Service MongoDB

# Check status
Get-Service MongoDB
```

---

## Option 2: MongoDB Atlas (Cloud - No Installation)

**Best for:**
- No local installation needed
- Production-ready
- Free tier available
- Automatic backups

### Setup Steps

1. **Create Account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up for free

2. **Create Cluster**
   - Click "Build a Database"
   - Choose "Free" tier (M0)
   - Select your region (closest to you)
   - Click "Create"

3. **Configure Access**
   - Create database user (username/password)
   - Add IP address: Click "Add My Current IP Address"
   - Or allow all: 0.0.0.0/0 (for development only)

4. **Get Connection String**
   - Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password

5. **Update Your .env File**
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/christcircle?retryWrites=true&w=majority
   ```

---

## Option 3: Manual MongoDB (Not Recommended)

If you want to run MongoDB manually without service:

1. **Install MongoDB** (uncheck "Install as Service")

2. **Create Data Directory**
   ```powershell
   mkdir C:\data\db
   ```

3. **Start MongoDB Manually**
   ```powershell
   # Navigate to MongoDB bin directory
   cd "C:\Program Files\MongoDB\Server\7.0\bin"
   
   # Start MongoDB
   .\mongod.exe --dbpath C:\data\db
   ```

4. **Keep Terminal Open**
   - MongoDB runs in this terminal
   - Don't close it while developing
   - Open new terminal for your app

---

## Troubleshooting

### Service Won't Start
```powershell
# Check Windows Event Viewer
eventvwr.msc

# Look in: Windows Logs > Application
# Filter for MongoDB errors
```

### Connection Refused
```powershell
# Check if MongoDB is running
Get-Service MongoDB

# Check if port 27017 is in use
netstat -ano | findstr :27017

# Restart the service
Restart-Service MongoDB
```

### Permission Issues
- Run installer as Administrator
- Ensure data directory has write permissions

### Port Already in Use
```powershell
# Find what's using port 27017
netstat -ano | findstr :27017

# Kill the process (replace PID)
taskkill /PID <process_id> /F
```

---

## Recommended Setup for ChristCircle

**For Development:**
- Use MongoDB as Windows Service (Option 1)
- Easy to manage, always available
- Good for local testing

**For Production:**
- Use MongoDB Atlas (Option 2)
- Professional, scalable
- Automatic backups
- Better security

---

## Quick Start Commands

After installation, verify everything works:

```powershell
# 1. Check MongoDB service
Get-Service MongoDB

# 2. Connect with mongosh
mongosh

# 3. In mongosh, create your database
use christcircle

# 4. Exit mongosh
exit

# 5. Start your app
npm run dev
```

Your ChristCircle app will automatically connect to MongoDB when it starts!
