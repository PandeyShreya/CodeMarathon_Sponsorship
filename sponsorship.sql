create schema sponsorship;
set search_path to sponsorship

CREATE TABLE Sponsors (
    SponsorID serial PRIMARY KEY,
    SponsorName VARCHAR(255) NOT NULL,
    IndustryType VARCHAR(255),
    ContactEmail VARCHAR(255) UNIQUE NOT NULL,
    Phone VARCHAR(20) NOT NULL
);

CREATE TABLE Matches (
    MatchID serial PRIMARY KEY,
    MatchName VARCHAR(255) NOT NULL,
    MatchDate DATE NOT NULL,
    Location VARCHAR(255) NOT NULL
);

CREATE TABLE Contracts (
    ContractID serial PRIMARY KEY,
    SponsorID INT,
    MatchID INT,
    ContractDate DATE NOT NULL,
    ContractValue DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (SponsorID) REFERENCES Sponsors(SponsorID),
    FOREIGN KEY (MatchID) REFERENCES Matches(MatchID)
);

CREATE TABLE Payments (
    PaymentID serial PRIMARY KEY,
    ContractID INT,
    PaymentDate DATE NOT NULL,
    AmountPaid DECIMAL(10, 2) NOT NULL,
    PaymentStatus VARCHAR(20) CHECK (PaymentStatus IN ('Pending', 'Completed', 'Failed')) NOT NULL,
    FOREIGN KEY (ContractID) REFERENCES Contracts(ContractID)
);

-- Insert data into Sponsors
INSERT INTO Sponsors (SponsorName, IndustryType, ContactEmail, Phone)
VALUES
('Nike', 'Sportswear', 'nike@sports.com', '1234567890'),
('Adidas', 'Sportswear', 'contact@adidas.com', '2345678901'),
('Red Bull', 'Energy', 'info@redbull.com', '3456789012'),
('Puma', 'Sportswear', 'support@puma.com', '4567890123'),
('Under Armour', 'Sportswear', 'hello@underarmour.com', '5678901234'),
('Coca Cola', 'Beverages', 'contact@coca-cola.com', '6789012345'),
('Pepsi', 'Beverages', 'pepsi@contact.com', '7890123456'),
('Samsung', 'Electronics', 'samsung@sponsor.com', '8901234567'),
('Sony', 'Electronics', 'support@sony.com', '9012345678'),
('Visa', 'Financial Services', 'info@visa.com', '1234567890');

-- Insert data into Matches
INSERT INTO Matches (MatchName, MatchDate, Location)
VALUES
('ICC World Cup Final', '2024-11-15', 'Mumbai'),
('UEFA Champions League Final', '2024-06-01', 'London'),
('ISL Semi-Final', '2024-12-10', 'Kolkata'),
('NBA Finals Game 7', '2024-06-25', 'Los Angeles'),
('Super Bowl LVII', '2024-02-10', 'Miami'),
('Wimbledon Mens Final', '2024-07-14', 'London'),
('Tokyo Olympic 100m Final', '2024-07-31', 'Tokyo'),
('FIFA World Cup Semi-Final', '2024-12-18', 'Doha'),
('Indian Premier League Final', '2024-05-20', 'Chennai'),
('Boston Marathon', '2024-04-19', 'Boston');

-- Insert data into Contracts
INSERT INTO Contracts (SponsorID, MatchID, ContractDate, ContractValue)
VALUES
(1, 1, '2024-08-01', 150000.00),
(2, 2, '2024-05-15', 200000.00),
(3, 3, '2024-09-20', 100000.00),
(4, 4, '2024-07-01', 180000.00),
(5, 5, '2024-06-10', 250000.00),
(6, 6, '2024-02-01', 220000.00),
(7, 7, '2024-07-25', 175000.00),
(8, 8, '2024-12-01', 300000.00),
(9, 9, '2024-05-10', 270000.00),
(10, 10, '2024-04-01', 160000.00);

-- Insert additional data into Contracts
INSERT INTO Contracts (SponsorID, MatchID, ContractDate, ContractValue)
VALUES
(1, 2, '2024-08-01', 150000.00), -- Nike sponsoring UEFA Champions League Final
(1, 3, '2024-09-01', 130000.00), -- Nike sponsoring ISL Semi-Final
(2, 4, '2024-07-01', 180000.00), -- Adidas sponsoring NBA Finals Game 7
(2, 5, '2024-06-01', 200000.00); -- Adidas sponsoring Super Bowl LVII

INSERT INTO Contracts (SponsorID, MatchID, ContractDate, ContractValue)
VALUES
(3, 6, '2024-07-10', 120000.00), -- Red Bull sponsoring Wimbledon Men's Final
(3, 7, '2024-08-01', 140000.00); -- Red Bull sponsoring Tokyo Olympic 100m Final

-- Insert data into Payments
INSERT INTO Payments (ContractID, PaymentDate, AmountPaid, PaymentStatus)
VALUES
(1, '2024-08-10', 75000.00, 'Completed'),
(1, '2024-09-10', 75000.00, 'Completed'),
(2, '2024-06-20', 100000.00, 'Completed'),
(2, '2024-07-20', 100000.00, 'Completed'),
(3, '2024-09-30', 50000.00, 'Completed'),
(3, '2024-10-30', 50000.00, 'Pending'),
(4, '2024-07-10', 90000.00, 'Completed'),
(4, '2024-08-10', 90000.00, 'Pending'),
(5, '2024-06-15', 125000.00, 'Completed'),
(6, '2024-02-20', 110000.00, 'Completed'),
(7, '2024-08-01', 87500.00, 'Completed'),
(8, '2024-12-10', 150000.00, 'Completed'),
(9, '2024-05-25', 135000.00, 'Completed'),
(10, '2024-04-10', 80000.00, 'Completed'),
(10, '2024-05-10', 80000.00, 'Pending');


SELECT s.SponsorId, s.SponsorName, COUNT(m.MatchId) AS NumberOfMatches
FROM Sponsorship.Sponsors s
full JOIN Sponsorship.Contracts c ON s.SponsorId = c.SponsorId 
full JOIN Sponsorship.Matches m ON c.MatchId = m.MatchId
WHERE date_part('year',m.MatchId) = '2020'
GROUP BY s.SponsorId, s.SponsorName

SELECT 
    s.SponsorID, 
    s.SponsorName, 
    COUNT(m.MatchID) AS NumberOfMatches
FROM 
    Sponsorship.Sponsors s
    LEFT JOIN Sponsorship.Contracts c ON s.SponsorID = c.SponsorID
    LEFT JOIN Sponsorship.Matches m ON c.MatchID = m.MatchID
WHERE 
    EXTRACT(YEAR FROM m.MatchDate) = 2020
GROUP BY 
    s.SponsorID, 
    s.SponsorName;


select * from Matches
INSERT INTO Matches (MatchName, MatchDate, Location)
VALUES
('ICC World Cup Final', '2020-11-15', 'Mumbai')

INSERT INTO Contracts (SponsorID, MatchID, ContractDate, ContractValue)
VALUES
(1, 11, '2020-11-15', 150000.00)