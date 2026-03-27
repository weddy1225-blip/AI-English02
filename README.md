# 🚀 語音出發挑戰：週末野餐大冒險 (The Voice-Unlock Challenge)

這是一個專為英語初學者設計的互動式口說練習網頁。透過「語音通關」作為核心機制，學生必須選定交通工具並精確唸出對應的英文句子，才能解鎖前往野餐的旅程！

---

> ### 🎮 [立即體驗](https://weddy1225-blip.github.io/AI-English02/)/)



> **💡 最佳體驗建議：** > 1. 請使用 **Google Chrome** 或 **Microsoft Edge** 瀏覽器。
> 2. 進入網頁後，當瀏覽器要求「使用麥克風」時，請點擊 **「允許」**。
> 3. 確保在安靜的環境下進行挑戰，辨識效果會更好喔！

---

## 📖 遊戲互動流程 (Interaction Flow)

### 1. 介面選擇 (Interface)
使用者從四種醒目的交通工具大方框中挑選出發方式：
* 🚌 **BUS** (公車)
* 🚲 **BIKE** (腳踏車)
* 🚗 **CAR** (汽車)
* 🚇 **MRT** (捷運)

### 2. 隨機挑戰 (Random Challenge)
點擊方框後，系統會從資料庫中隨機派發不同難度的句型：
* **★ 難度一 (Easy):** "Let's take the bus."
* **★★ 難度二 (Medium):** "We can go to the park by bus."
* **★★★ 難度三 (Hard):** "Taking the bus is a fun way to travel!"

### 3. 語音通關與雙重回饋 (Voice Unlock & Rewards)
* **精準辨識：** 系統會即時比對學生朗讀的音軌與目標句子。
* **隨機獎勵：** 挑戰成功後，系統會組合「隨機鼓勵」+「旅程期待」語句。
  * *例如："Excellent speaking! The sun is shining, let's go find a great spot on the grass!"*
* **語音合成 (TTS)：** 除了文字顯示，電腦也會自動朗讀出這段回饋語，強化聽力練習。

---

## 🛠️ 技術架構 (Tech Stack)

* **Frontend:** HTML5 / CSS3 (採用 Flexbox 響應式佈局)
* **Logic:** Vanilla JavaScript (ES6+)
* **APIs:** * `Web Speech API (SpeechRecognition)`: 用於實現即時語音辨識功能。
  * `Web Speech API (SpeechSynthesis)`: 用於實現語音合成 (TTS) 回饋。

---

## 🚀 如何部署至自己的 GitHub

1. **建立倉庫：** 在 GitHub 建立一個新 Repository。
2. **上傳檔案：** 將 `index.html` 上傳至該倉庫。
3. **啟動頁面：** * 進入 **Settings > Pages**。
   * Branch 選擇 `main`，Folder 選擇 `/(root)`。
   * 點擊 **Save**。
4. **獲取網址：** 大約 1 分鐘後，即可獲得專屬的 `https://` 網址。

---

## 💡 開發初衷 (Inspiration)

本專案旨在解決傳統英語學習中「不敢開口」的問題。透過簡潔的視覺設計、直觀的點擊回饋與 AI 語音技術，讓學習者在充滿趣味的「野餐冒險」情境中，自然地練習交通工具相關句型，建立口說自信心。

---

Designed with ❤️ for English Learners.
