# Jerry Tsai · 蔡鎮鴻 — Personal Portfolio

A clean, responsive personal portfolio website built with pure HTML, CSS, and vanilla JavaScript — no frameworks required.

## 技術棧 Tech Stack

| 類別 | 技術 |
|------|------|
| 結構 | HTML5 (語義化標籤) |
| 樣式 | CSS3 (Custom Properties、Grid、Flexbox) |
| 互動 | Vanilla JavaScript (ES6+) |
| 字型 | Google Fonts — Open Sans、Noto Sans TC、IBM Plex Mono |
| 套件管理 | Yarn |
| 開發伺服器 | live-server |
| 部署 | GitHub Pages (`gh-pages`) |
| 版本控制 | Git |

## 功能特色 Features

### 視覺效果
- **Canvas 粒子背景** — 使用 `<canvas>` API 繪製隨機浮動的微粒，透過 `requestAnimationFrame` 驅動，帶來輕量的動態層次感
- **打字動畫 (Typing Effect)** — Hero 區塊循環顯示多個職稱字串，模擬真人輸入效果，搭配閃爍游標
- **捲動顯示動畫 (Scroll Reveal)** — 使用 `IntersectionObserver` API，各區塊進入視窗時觸發淡入上移效果
- **頁面讀取動畫** — Hero 各元素以 CSS `animation-delay` 依序淡入

### 導覽列
- **固定頂部導覽** — 初始透明，捲動後切換為白底毛玻璃效果 (`backdrop-filter: blur`)
- **閱讀進度條** — 頁面頂端的細線隨捲動比例即時更新，讓訪客掌握閱讀進度
- **Active 連結高亮** — 依目前捲動位置自動標記對應的導覽項目
- **響應式漢堡選單** — 螢幕寬度小於 768px 時切換為行動版選單，含開關動畫

### 版面配置
- **全 RWD 響應式設計** — 支援桌機、平板、手機三種版型 (斷點：820px / 768px / 480px)
- **CSS Grid 雙欄佈局** — About 統計數據、專案卡片、技能分類均採用 Grid 排版
- **時間軸 (Timeline)** — 工作與學歷以垂直時間軸呈現，搭配帶光暈的圓點標記

### 內容區塊
| 區塊 | 說明 |
|------|------|
| Hero | 全螢幕首頁，顯示姓名、打字動畫職稱、聯絡資訊 |
| About | 個人介紹 + 四項數據統計卡片 |
| Experience & Education | 垂直時間軸，Work / Education 標籤分類 |
| Projects | 卡片式專案展示，含技術標籤與 GitHub 連結 |
| Skills & Certifications | 分組標籤，語言 / 工具 / 雲端 / 語言能力 |
| Contact | 聯絡呼籲按鈕與社群連結 |

## 目錄結構 Project Structure

```
Website/
├── index.html          # 主頁面（單頁式）
├── css/
│   └── style.css       # 全域樣式、設計變數、RWD
├── js/
│   └── main.js         # Canvas、打字動畫、導覽、Scroll Reveal
├── package.json
├── yarn.lock
└── .claude/
    └── launch.json     # 開發伺服器設定
```

## 本地開發 Development

```bash
# 安裝套件
yarn install

# 啟動開發伺服器（Port 3000，存檔自動重整）
yarn dev
```

## 部署至 GitHub Pages

1. 在 GitHub 建立一個 Repository（建議命名為 `<your-username>.github.io`）
2. 設定遠端來源

   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin master
   ```

3. 進入 Repository Settings → Pages → Source 選擇 `master` branch，目錄選 `/ (root)`
4. 或使用指令一鍵部署

   ```bash
   yarn deploy
   ```

## License

MIT
