# The Encryption Challenge   

Welcome to the **Cybersecurity Track** of Hacktoberfest 2025 Hosted by Khoury SHEROS of Color and ACM-W! 
Your mission — if you choose to accept it — is to **decrypt the secret files** using OpenSSL on your command line.  

Don’t worry — you don’t need to be a cybersecurity expert!  
Just follow the steps below carefully and you’ll uncover the hidden messages inside. 🚀  

---

## 🧠 Challenge Overview

You have **three encrypted files**, each protected using a different encryption algorithm:

AES-256-CBC
AES-256-CTR
ChaCha20

Your goal:  
✅ Decrypt atleast one of the files using OpenSSL  
✅ Submit your decrypted text file(s) in the correct format  

---

## 🔑 Passphrase

To make things simple, here’s your decryption key:  
**Passphrase:** `KHOURY_SHEROS_2025`

---

## 📥 Download the Encrypted Files

You can download any **one** (or all) of the encrypted files below to attempt the decryption challenge from this repository.
`encrypted_file_1.b64` 
`encrypted_file_2.b64` 
`encrypted_file_3.b64` 

> 💡 Tip: You only need to download **one file** to participate — but decrypting all three earns bonus points!


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
```
### 4. Confirm Installation:
```bash
openssl version
```

---
## 🔓 How to Decrypt

Each file is **Base64-encoded ciphertext**.  
OpenSSL can read Base64 directly using the `-base64` flag.  

Run these commands **one at a time** — use the provided passphrase.

---

### 1️⃣ AES-256-CTR
```bash
openssl enc -d -aes-256-ctr -pbkdf2 -md sha256 \
  -in encrypted_aes_ctr.b64 -base64 \
  -out YourName_decrypted_file2.txt \
  -pass pass:KHOURY_SHEROS_2025
```
### 2️⃣ AES-256-CBC
```bash
penssl enc -d -aes-256-cbc -pbkdf2 -md sha256 \
  -in encrypted_aes_cbc.b64 -base64 \
  -out YourName_decrypted_file1.txt \
  -pass pass:KHOURY_SHEROS_2025
```
### 3️⃣ ChaCha20
```bash
openssl enc -d -chacha20 -pbkdf2 -md sha256 \
  -in encrypted_chacha20.b64 -base64 \
  -out YourName_decrypted_file3.txt \
  -pass pass:KHOURY_SHEROS_2025

```
