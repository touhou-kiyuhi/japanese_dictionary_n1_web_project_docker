# Frontend Docker Image 與 Container
## 專案結構 + DockerFile 位置
```
japanese_dictionary_n1_frontend/ (根目錄)
├── Dockerfile      ← 建議放這裡
├── index.js
├── index.html                 # User Card 的引導頁面(進入首頁前的引導頁面)
├── services.html              # 服務頁面
├── contact.html               # 聯絡頁面
│
├── pages/                     # HTML 檔案
│   ├── home.html              # 首頁
│   ├── about.html             # 關於
│   ├── result.html            # 其他頁面
│   └── components             # Web Components: Header, Footer
│       ├── indexHeader.html    
│       └── indexFooter.html  
│
├── css/                       # CSS 檔案
│   ├── style.css              # 主樣式檔案
│   ├── home_style.css         # 首頁
│   ├── about_style.css        # 關於
│   ├── result_style.css       # 其他頁面的樣式檔案
│   └── components             # Web Components: Header, Footer
│       ├── indexHeader.css    
│       └── indexFooter.css    
│
├── js/                        # JavaScript 檔案
│   ├── script.js              # 主程式檔案
│   ├── home_script.js         # 首頁
│   ├── about_script.js        # 關於
│   ├── result_script.js       # 其他頁面的程式碼
│   └── components             # Web Components: Header, Footer
│       ├── indexHeader.js    
│       └── indexFooter.js    
│
├── images/                    # 圖片檔案
│   ├── logo.svg               # 網站logo
|   ├── userCard.gif           # 卡片gif
│   ├── background.jpg         # 背景圖片
│   └── icon.png               # 網頁圖示
│
├── json/                      # json檔案
│   └── about.json             # 關於
│
├── program_source/            # 程式檔案(用於網頁顯示)
│   └── helloWorld.java        # hello World!
|
(如果有需要的話)
└── fonts/                     # 字型檔案
    ├── custom-font.woff       # 自定義字型
    └── custom-font.ttf        # 字型檔案
```
## Frontend
### 根據 Dockerfile 建立 Frontend Docker Image
```shell
docker build -t japanese_dictionary_n1_frontend .
```
### 啟動一個 Frontend Docker Container
```shell
docker run --name my_frontend -p 3000:3000 -d japanese_dictionary_n1_frontend
```