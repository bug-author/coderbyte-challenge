/*
  write your SQL query below
  to run only a specific line press CTRL + Enter 

  My initial submission had comments and my approach and I asked gpt these questions
  1. in the query how would i add a column based on certain condition? A view?
  2. suggestions on improving code readablity, maintainablity and performance
  
  entire chat available here: https://chatgpt.com/share/67811598-eb7c-8011-8328-9df2a8a12ba8

*/

SELECT 
  FirstName,
  LastName,
  ReportsTo,
  Position,
  Age,
  CASE 
    WHEN ReportsTo = 'Jenny Richards' THEN 'CEO'
    ELSE 'None'
  END AS `Boss Title`
FROM 
  maintable_IRJX8
WHERE
  ReportsTo = 'Jenny Richards' OR ReportsTo IS NULL
ORDER BY
  Age ASC;
