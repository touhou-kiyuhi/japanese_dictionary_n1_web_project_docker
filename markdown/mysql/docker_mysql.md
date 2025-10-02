# 資料庫 Docker Image 與 Container
## MySQL
### 拉取 MySQL 9.2 Image
```shell
docker pull mysql:9.2.0
```
### 啟動一個 MySQL Container
```shell
docker run --name my_mysql -p 3307:3306 -v /data/MySQL:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:9.2.0
```