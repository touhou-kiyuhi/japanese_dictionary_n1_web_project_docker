# japanese dictionary n1 Java Spring Boot Backend
## 更新日誌
* 2025/08/19
    * **first commit**
    * **實現 日語字典 Basic CRUD 功能：(BasicCRUDController.java)**
        * Create
        * Read
        * Update
        * Delete
    * **實現 日語字典 查詢功能：(OthersCRUDController.java)**
        * 取得所有資料 (模糊查詢)
        * 根據 word 、 kana 、 romaji 參數查詢相關資料 (Update、Delete)
    * **新增 git_commit_messages 資料夾，實現 git commit 生成**
    * **新增 jlpt_n1 備份資料夾**
* 2025/08/20
    * **新增 properties 設定說明**
* 2025/09/05
    * **更新 README.md 說明**
* 2025/09/24
    * **刪除 jlpt_n1 備份資料夾**
---
## Java Spring Boot 設定
### [properties 設定](/markdown/backend/properties_settings.md)
### [Maven 專案打包 .jar](/markdown/backend/maven_to_jar.md)
### [Java Spring Boot Docker Dockerfile](/markdown/backend/docker_javaSpringBoot_dockerfile.md)
### [Java Spring Boot Docker Image 與 Container](/markdown/backend/docker_javaSpringBoot.md)