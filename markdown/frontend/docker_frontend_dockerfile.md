# Frontend Docker Dockerfile
## Dockerfile 內容
* 檔案路徑：`japanese_dictionary_n1_frontend/Dockerfile`
    ```Dockerfile
    # frontend/Dockerfile
    FROM node:18-alpine
    WORKDIR /app
    COPY . .
    # 這是唯一需要安裝的依賴
    RUN npm install express   
    EXPOSE 3000
    CMD ["node", "index.js"]
    ```