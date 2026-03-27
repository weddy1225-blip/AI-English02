# 🚀 語音出發挑戰：週末野餐大冒險 (The Voice-Unlock Challenge)

這是一個專為英語初學者設計的互動式口說練習網頁。透過「語音通關」作為核心機制，學生必須選定交通工具並精確唸出對應的英文句子，才能解鎖前往野餐的旅程！

## 🎮 遊戲核心機制 (Game Mechanics)

本專案採用 **Web Speech API** 進行即時語音辨識與合成，創造「選單 -> 挑戰 -> 回饋」的完整學習閉環。

### 1. 介面選擇 (Interface)
使用者從四種醒目的交通工具大方框中挑選出發方式：
* 🚌 **BUS** (公車)
* 🚲 **BIKE** (腳踏車)
* 🚗 **CAR** (汽車)
* 🚇 **MRT** (捷運)

### 2. 隨機挑戰 (Random Challenge)
點擊方框後，系統會從資料庫中隨機派發不同難度的句型，例如：
* **Easy:** "Let's take the MRT."
* **Hard:** "Taking the MRT is the fastest way to get there!"

### 3. 語音通關與回饋 (Voice Unlock)
* **辨識系統：** 學生點擊麥克風按鈕後朗讀，系統會即時比對發音準確度。
* **雙重回饋：** 挑戰成功後，系統會結合「隨機鼓勵語」與「旅程期待語」，並透過 TTS (Text-to-Speech) 語音合成技術大聲唸出，增加互動趣味感。

---

## 🛠️ 技術架構 (Tech Stack)

* **Frontend:** HTML5, CSS3 (Flexbox 佈局, 動畫效果)
* **Logic:** Vanilla JavaScript
* **APIs:** * `Web Speech API (SpeechRecognition)`: 用於語音辨識。
  * `Web Speech API (SpeechSynthesis)`: 用於語音合成回饋。

---

## 🚀 如何部署至 GitHub Pages

1. 將 `index.html` 上傳至 GitHub 倉庫 (Repository)。
2.
