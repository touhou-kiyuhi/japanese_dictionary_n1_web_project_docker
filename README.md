# japanese_dictionary_n1_web_project_docker
## Database
### [MySQL 資料庫](/markdown/mysql.md)
## Backend
### [japanese dictionary n1 Java Spring Boot Backend](/markdown/backend.md)
## Frontend
### [japanese dictionary n1 Frontend](/markdown/frontend.md)
---
## docker-compose.yml 內容
* 檔案路徑：`docker-compose.yml`
    ```yml
    version: "3.9"

    # volumes 命名
    volumes:
        db_data:

    services:
        mysql:
            image: mysql:9.2.0
            container_name: my_mysql
            restart: always
            environment:
                MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
                MYSQL_DATABASE: ${MYSQL_DATABASE}
            ports:
                - "3307:3306"
            volumes:
                - db_data:/var/lib/mysql
                - ./db/jlpt_n1_utf8mb4.sql:/docker-entrypoint-initdb.d/jlpt_n1_utf8mb4.sql

    backend:
        build: ./backend/japanese_dictionary_n1_java_spring_boot_backend
        container_name: my_backend
        restart: always
        environment:
            SPRING_DATASOURCE_URL: ${SPRING_DATASOURCE_URL}
            SPRING_DATASOURCE_USERNAME: ${SPRING_DATASOURCE_USERNAME}
            SPRING_DATASOURCE_PASSWORD: ${SPRING_DATASOURCE_PASSWORD}
        ports:
            - "8080:8080"
        depends_on:
            - mysql

    frontend:
        build: ./japanese_dictionary_n1_frontend
        container_name: my_frontend
        restart: always
        ports:
            - "3000:3000"
        depends_on:
            - backend
    ```
---
## 專案結構 + docker-compose.yml 位置
```txt
japanese_dictionary_n1_web_project_docker/
├── docker-compose.yml      ← 建議放這裡
├── backend
│   └── japanese_dictionary_n1_java_spring_boot_backend/
├── japanese_dictionary_n1_frontend/
├── db/
│   └── jlpt_n1_utf8mb4.sql
│
├── git_commit_messages/
├── markdown/
└── README.md
```
---
## Web Project `docker-compose.yml`
### 根據 docker-compose.yml 啟動一組容器
```shell
docker-compose up -d
```
### 只是 停止容器，但容器、網路還在
```shell
docker-compose stop
```
### 停 + 刪容器與網路，比較乾淨
```shell
docker-compose down
```
### 連同 volume 也刪掉（資料清空）
```shell
docker-compose down -v
```
### 連 Image 都刪掉
```shell
docker-compose down --rmi all
```
---
## 參考資料
### git commit
* [偉大的 Git commit message rules](https://hackmd.io/@howhow/git_commit#%E5%81%89%E5%A4%A7%E7%9A%84-Git-commit-message-rules)
* [Git Commit Message 規範](https://codeewander.github.io/docs/git-commit)
* [Git Commit Message 這樣寫會更好，替專案引入規範與範例](https://wadehuanglearning.blogspot.com/2019/05/commit-commit-commit-why-what-commit.html)