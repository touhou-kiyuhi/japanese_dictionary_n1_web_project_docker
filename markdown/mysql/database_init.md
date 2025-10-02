# 資料庫初始化
## MySQL
### 初始
```sql
CREATE DATABASE jlpt_n1_utf8mb4 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
```sql
USE jlpt_n1_utf8mb4;

CREATE TABLE n1_word (
    id                 INT          NOT NULL PRIMARY KEY AUTO_INCREMENT,
    word               VARCHAR(256) NOT NULL,
    meaning            TEXT         NOT NULL,
    created_date       TIMESTAMP    NOT NULL,
    last_modified_date TIMESTAMP    NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE n1_kana_romaji (
    id      INT          NOT NULL PRIMARY KEY AUTO_INCREMENT,
    word_id INT          NOT NULL,
    kana    VARCHAR(256) NOT NULL,
    romaji  VARCHAR(256) NOT NULL,
    FOREIGN KEY (word_id) REFERENCES n1_word(id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE n1_sentence (
    id               INT  NOT NULL PRIMARY KEY AUTO_INCREMENT,
    word_id          INT  NOT NULL,
    sentence         TEXT NOT NULL,
    sentence_meaning TEXT NOT NULL,
    FOREIGN KEY (word_id) REFERENCES n1_word(id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```