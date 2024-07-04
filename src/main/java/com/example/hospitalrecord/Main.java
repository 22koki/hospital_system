package com.example.hospitalrecord;

import java.sql.Connection;

public class Main {
    public static void main(String[] args) {
        Connection conn = DBUtil.connect();
        if (conn != null) {
            System.out.println("Successfully connected to the database.");
        } else {
            System.out.println("Failed to connect to the database.");
        }
    }
}
