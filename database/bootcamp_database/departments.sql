-- CREATE TABLE `bootcamp_database`.`departments` (
--   `department_id` INT NOT NULL AUTO_INCREMENT,
--   `department_name` VARCHAR(45) NOT NULL,
--   `status` TINYINT(1) NULL DEFAULT 1,
--   PRIMARY KEY (`department_id`),
-- UNIQUE INDEX `department_name_UNIQUE` (`department_name` ASC) );
 
 -- auto increment - check the id of previously inserted row and increment it to plus 1
 -- unique avoid addings duplicates values in the column
 -- primary key make sure that each value is unique in that column
 
 use bootcamp_database;
 insert into bootcamp_database.departments values(3, "commerce", 1);
 


SELECT * FROM bootcamp_database.departments;

-- advance level command to create table for existing table
create table test_employees as 
select * from bootcamp_database.employees;

SELECT * FROM test_employees;

-- truncate command to erase/delete data everything from a table
truncate table test_employees;

-- drop command to delete the data plus the table
drop table test_employees;


select * from employees;

select * from departments;



