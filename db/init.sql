CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    make VARCHAR(100),
    model VARCHAR(100),
    year INTEGER
);

INSERT INTO cars 
(make, model, year)
VALUES
('nissan', 'sentra', 1988),
('GM', '88', 1995),
('Datsun', 'Skyline', 1970);

SELECT * FROM cars;