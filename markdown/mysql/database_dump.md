# 資料庫備份資料
## MySQL
### mysqldump: 
`mysqldump -u <username> -p <mysql_database> <mysql_database_table> --result-file=<backup.sql>`
```shell
mysqldump -u root -p jlpt_n1_utf8mb4 n1_word n1_kana_romaji n1_sentence --result-file=./db/jlpt_n1_utf8mb4.sql
```