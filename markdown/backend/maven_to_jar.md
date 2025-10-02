# Maven 專案打包 .jar
## 執行測試 & 編譯
```bash
./mvnw clean install -DskipTests
```
## 打包成 jar
```bash
./mvnw clean package -DskipTests
```
* 完成後會看到在 target/ 裡出現
    ```txt
    target/japanese_dictionary_n1-0.0.1-SNAPSHOT.jar
    ```
## 執行這個 jar
```bash
java -jar target/japanese_dictionary_n1-0.0.1-SNAPSHOT.jar
```