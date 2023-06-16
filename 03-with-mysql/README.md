# Introduction

[@Youtube](https://youtu.be/YkBOkV0s5eQ)
[@Git Repo](https://github.com/CodAffection/MySQL-CRUD-with-Node.js-API)


3 - [Node.js + MySQL CRUD - GET, POST, PUT and DELETE](https://youtu.be/YkBOkV0s5eQ)

    - 00:00 - Introduction
    - 01:20 - How to work with MySQL DB from Node.js
    - 10:32 - Retrieve List of Records
    - 18:00 - Global Error Handling
    - 23:17 - Retrieve a Record with Given Id
    - 26:58 - Delete Operation
    - 30:42 - Insert & Update Operations
    

## Notes

```shell
npm init

npm install mysql2
npm install express
npm install body-parser
npm install express-async-errors || npm install "express@>5.0.0-beta.1" --save
```

## MySql on Docker

```shell
docker run -d -p 3306:3306 --name mysqldb -e MYSQL_ROOT_PASSWORD=P@ssword1 -d mysql
```
DBeaver connection issue:

- Right click your connection, choose "Edit Connection"
- On the "Connection settings" screen (main screen) click on "Edit Driver Settings"
- Click on "Connection properties", (In recent versions it named "Driver properties")
- Right click the "user properties" area and choose "Add new property"
- Add two properties: "useSSL" and "allowPublicKeyRetrieval"
- Set their values to "false" and "true" by double clicking on the "value" column

Sql Scripts

```bash
-- create table
CREATE TABLE `codaffection_employee_db`.`employees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `employee_code` varchar(45) DEFAULT NULL,
  `salary` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- insert 4 employee
LOCK TABLES `codaffection_employee_db`.`employees` WRITE;
INSERT INTO `codaffection_employee_db`.`employees` VALUES (1,'Samantha Mackenzie','EMP97',80000),(2,'Layla Benn','EMP91',92000),(3,'Luis Alberto','EMP99',84000),(4,'Rishaan','EMP70',85000);
UNLOCK TABLES;

-- stored procedure - execute withing create procedure window
CREATE PROCEDURE `codaffection_employee_db`.`usp_employee_add_or_edit` (IN _id INT,IN _name VARCHAR(45),IN _employee_code VARCHAR(45),IN _salary INT)
BEGIN
	IF _id = 0 THEN
		INSERT INTO employees(name,employee_code,salary)
		VALUES (_name,_employee_code,_salary);
        
	ELSE
		UPDATE employees
        SET name = _name,
		employee_code = _employee_code,
        salary = _salary
        WHERE id = _id;
	END IF;
    
    SELECT ROW_COUNT() AS 'affectedRows';
END