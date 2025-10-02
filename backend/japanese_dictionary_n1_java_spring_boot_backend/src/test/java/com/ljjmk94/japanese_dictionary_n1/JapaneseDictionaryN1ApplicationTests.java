package com.ljjmk94.japanese_dictionary_n1;

import java.sql.Connection;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class JapaneseDictionaryN1ApplicationTests {

	@Autowired
    private DataSource dataSource;

	@Test
	void contextLoads() {
	}

	@Test
    void testConnection() {
        try (Connection conn = dataSource.getConnection()) {
            if (conn != null && !conn.isClosed()) {
                System.out.println("成功連線到 MySQL 資料庫！");
            } else {
                System.out.println("連線失敗！");
            }
        } catch (SQLException e) {
            System.out.println("連線出現錯誤：");
            e.printStackTrace();
        }
    }
}
