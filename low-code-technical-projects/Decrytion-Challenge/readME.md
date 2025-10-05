# The Encryption Challenge   

Welcome to the **Cybersecurity Track** of Hacktoberfest 2025 Hosted by Khoury SHEROS of Color and ACM-W! 
Your mission — if you choose to accept it — is to **decrypt the secret files** using OpenSSL on your command line.  

Don’t worry — you don’t need to be a cybersecurity expert!  
Just follow the steps below carefully and you’ll uncover the hidden messages inside. 🚀  

---

## 🧠 Challenge Overview

You have **three encrypted files**, each protected using a different encryption algorithm:

| File | Algorithm Used |
|------|----------------|
| `encrypted_aes_cbc.b64` | AES-256-CBC |
| `encrypted_aes_ctr.b64` | AES-256-CTR |
| `encrypted_chacha20.b64` | ChaCha20 |

Your goal:  
✅ Decrypt all three files using OpenSSL  
✅ Submit your decrypted text file(s) in the correct format  

---

## 🔑 Passphrase

To make things simple, here’s your decryption key:  
**Passphrase:** `KHOURY_SHEROS_2025`

---

## 📦 Files to Download

Download these files from this repository:  
- [`encrypted_aes_cbc.b64`](encrypted_aes_cbc.b64)  
- [`encrypted_aes_ctr.b64`](encrypted_aes_ctr.b64)  
- [`encrypted_chacha20.b64`](encrypted_chacha20.b64)  

Place all files in the same working directory on your system (e.g., your Desktop or a Hacktoberfest folder).

---

## ⚙️ Environment Setup Instructions

You’ll need **OpenSSL** installed on your computer.  
Follow the setup instructions below based on your operating system 👇🏽  

---

### 🪟 **Windows Users (using WSL)**

If you’re on Windows, the easiest way to run Linux-style commands is through **WSL (Windows Subsystem for Linux)**.

**1. Enable WSL:**
Open PowerShell (as Administrator) and run:
```powershell
wsl --install
```
This installs Ubuntu as your default Linux distribution.  
After installation, restart your computer.

### 2. Open Ubuntu (WSL)
Search for “Ubuntu” in your Start Menu and open it.

### 3. Update & install OpenSSL inside WSL:
```bash
sudo apt update
sudo apt install -y openssl coreutils
