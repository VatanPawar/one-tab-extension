# 🧠 One Tab Extension

A minimalist Chrome extension to **enforce single-tab browsing** — built to eliminate distractions, maximize deep work, and maintain absolute focus during high-productivity sessions.

---

## 🚀 Features

- ✅ Automatically closes any new tab beyond the first one
- 🔒 Ensures only **one tab** stays active at any time
- 🧘 Ideal for distraction-free coding, writing, or study sessions
- ⚡ Lightweight and fast — no UI, just focused behavior

---

## 📦 Tech Stack

- JavaScript
- Chrome Extensions API (Manifest V2)
- Node.js (for Electron integration — optional)

---

## 🔧 How It Works

- Listens for new tab creation via Chrome’s extension APIs
- On any attempt to open a second tab, the extension force-closes it
- Keeps only the first tab alive in the active window

---

## 🛠 Installation

### 🔹 Load Locally in Chrome

1. Clone or download this repo:
   ```bash
   git clone https://github.com/VatanPawar/one-tab-extension.git
