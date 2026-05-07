# 🚧 CAT Group KSA – Safety Observation System

A modern web-based Safety Observation reporting system built for **CAT Group KSA** projects, aligned with **Saudi Aramco safety standards**.

This application replaces traditional Google Forms with a **professional, mobile-friendly web interface**, while still storing data in Google Sheets.

---

## 🌟 Features

* 🏢 Clean and professional CAT Group UI
* 📱 Fully mobile-friendly (site-ready)
* 📸 Image preview before upload
* 📷 Camera capture support (mobile devices)
* 📝 Structured safety observation workflow
* 🔗 Google Sheets integration (via Apps Script)
* ⚡ Lightweight & fast (no backend server required)

---

## 🖥️ Live Demo

👉 *(Add your deployed link here)*
Example: https://cat-safety-observation.netlify.app

---

## 📋 Form Modules

### 👤 Observer Details

* Name
* Company
* Date

### ⚠️ Observation Details

* Classification (Unsafe Action / Unsafe Condition)
* Location (Project Zones)
* Category (Work Permit, PPE, Excavation, etc.)

### 📊 Safety Details

* Permit Stopped (Yes/No)
* Positive Observation (Yes/No)
* Deviation / Violation
* Description

### 📸 Evidence

* Photo Upload (with preview)

---

## 📁 Project Structure

```
project/
│
├── index.html      # Main HTML structure
├── style.css       # Styling (CAT theme)
├── script.js       # Form logic + image preview
└── logo.png        # Company logo
```

---

## 🚀 Deployment

### 🔹 Netlify (Recommended)

1. Go to https://www.netlify.com
2. Drag & drop your project folder
3. Your site will be live instantly

---

### 🔹 GitHub Pages

1. Push project to GitHub
2. Go to **Settings → Pages**
3. Select:

   * Branch: `main`
   * Folder: `/root`
4. Save and access your live URL

---

## 🔗 Google Sheets Integration

This project uses **Google Apps Script** as backend.

### Setup:

1. Open Google Sheets
2. Go to **Extensions → Apps Script**
3. Add your script
4. Deploy as **Web App**
5. Replace in `script.js`:

```
YOUR_GOOGLE_SCRIPT_URL
```

---

## ⚠️ Limitations

* File uploads are limited using Apps Script
* For production-grade uploads, use:

  * Firebase Storage
  * Cloudinary

---

## 🔮 Future Enhancements

* 📍 GPS location capture
* 📊 Dashboard & analytics
* 🔐 Authentication system (Supervisor approval)
* 📄 Auto PDF report generation
* 📸 Multiple image upload

---

## 🏢 Developed For

**CAT Group KSA**
Safety Observation System (Saudi Aramco Projects)

---

## 👨‍💻 Author

**Md Ahmad Raza**

---

## 📌 License

This project is intended for internal/company use.
