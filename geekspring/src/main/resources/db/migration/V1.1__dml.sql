SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO roles (name)
VALUES
('ROLE_EMPLOYEE'),('ROLE_MANAGER'),('ROLE_ADMIN');

INSERT INTO users (username,password,first_name,last_name,email)
VALUES
('alex','$2a$10$vmkUHC45kZ4IVH./LlUH1e.jQnNZjVKss3uo3A6OChqKrl1SgoHZu','Alex','GeekBrains','alex@gb.com');


INSERT INTO users_roles (user_id, role_id)
VALUES
(1, 1),
(1, 2),
(1, 3);

INSERT INTO `courses`
(`title`) VALUES
('Математика'),
('Физика'),
('История'),
('Английский'),
('Химия');
