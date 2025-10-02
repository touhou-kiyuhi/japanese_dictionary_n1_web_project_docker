# Java Spring Boot Docker Dockerfile
## Dockerfile 內容
* 檔案路徑：`backend/japanese_dictionary_n1_java_spring_boot_backend/Dockerfile`
    ```Dockerfile
    # Step 1: 使用 Maven build image
    FROM maven:3.9.4-eclipse-temurin-21 AS build
    WORKDIR /app
    COPY pom.xml .
    COPY src ./src
    RUN mvn clean package -DskipTests

    # Step 2: 使用輕量 JDK image 來執行
    FROM eclipse-temurin:21-jre-alpine
    WORKDIR /app
    COPY --from=build /app/target/*.jar app.jar

    # 設定環境變數，MySQL 連線參數可透過 docker-compose 設定
    # ENV SPRING_DATASOURCE_URL=
    # ENV SPRING_DATASOURCE_USERNAME=
    # ENV SPRING_DATASOURCE_PASSWORD=

    EXPOSE 8080
    ENTRYPOINT ["java", "-jar", "app.jar"]
    ```