CREATE TABLE transactions (
    transaction_id INT AUTO_INCREMENT PRIMARY KEY,
    transaction_date DATE NOT NULL,
    description VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL -- Positive for income, negative for expenses
);

INSERT INTO transactions (transaction_date, description, category, amount)
VALUES ('2025-10-27', 'Grocery run at local store', 'Food', -55.75);

INSERT INTO transactions (transaction_date, description, category, amount)
VALUES ('2025-10-31', 'Monthly Salary Deposit', 'Income', 4500.00);

-- Query 1: Calculate Total Income, Total Expense, and Net Balance
SELECT
    SUM(CASE WHEN amount > 0 THEN amount ELSE 0 END) AS Total_Income,
    SUM(CASE WHEN amount < 0 THEN amount ELSE 0 END) AS Total_Expense,
    SUM(amount) AS Net_Balance
FROM transactions;

-- Query 2: Spending by Category (For the Bar/Pie Chart)
SELECT category; ABS(SUM(amount)) AS Total_Spending
FROM transactions
WHERE amount < 0 -- Only consider expenses
GROUP BY category
ORDER BY Total_Spending DESC;

-- Query 3: Filter all transactions for a specific month (e.g., October 2025)
SELECT
    transaction_date,
    description,
    category,
    amount
FROM transactions
WHERE DATE_FORMAT(transaction_date, '%Y-%m') = '2025-10'
ORDER BY transaction_date DESC;

-- Query 4: Monthly Summary for a specific month (The data for the Monthly Summary Chart)
SELECT category, SUM(amount) AS Net_Flow
FROM transactions
WHERE DATE_FORMAT(transaction_date, '%Y-%m') = '2025-10'
GROUP BY category
ORDER BY Net_Flow DESC;
