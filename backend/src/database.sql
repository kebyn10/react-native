create DATABASE tasksdb;
USE tasksdb;
CREATE TABLE if NOT EXISTS tasks(id int not null AUTO_INCREMENT PRIMARY KEY,title varchar(100) not null,description text )