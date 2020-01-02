BEGIN TRANSACTION;

INSERT INTO users (name, email, entries, joined) 
values (
    'Jessie', 
    'jessie@gmail.com', 
    5, 
    '2019-12-31'
);

INSERT INTO login (hash, email)
values (
    '$2a$10$xqv5dA5PKNITF7QStMsj9O1MGfmwZDX8s4p1tzLczgVD1oNoIt4x.',
    'jessie@gmail.com'
);

COMMIT;