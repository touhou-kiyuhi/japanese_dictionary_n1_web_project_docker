# Java Spring Boot Docker Image 與 Container
## 專案結構 + DockerFile 位置
```txt
japanese_dictionary_n1_java_spring_boot_backend/
├── Dockerfile      ← 建議放這裡
├── pom.xml
├── src/
│   └── main/
│       └── java/...
│       └── resources/
└── target/
    └── app.jar
```
## Java Spring Boot Backend
### 根據 Dockerfile 建立 Java Spring Boot Backend Docker Image
```shell
docker build -t japanese_dictionary_n1_backend .
```
### 啟動一個 Java Spring Boot Backend Docker Container
```shell
docker run --name my_backend -p 8080:8080 -d japanese_dictionary_n1_backend
```