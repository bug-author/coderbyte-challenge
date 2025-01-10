/*
  write your SQL query below
  to run only a specific line press CTRL + Enter 

  prompt to gpt how can i extract year and month together in a mysql table
  link to chat: https://chatgpt.com/share/67811598-eb7c-8011-8328-9df2a8a12ba8

  I'll be saving code now and then just copy pasting my solution if coderbyte asks to reload again
  its the 5th time Im reloading and doing a resubmission



*/

SELECT 
  DATE_FORMAT(DateJoined, '%Y-%m') AS JoinMonth,
  COUNT(*) AS TotalMembersJoined
FROM 
  maintable_QWHTM
WHERE 
  DateJoined >= '2017-01-01' AND DateJoined < '2018-01-01'
GROUP BY
  JoinMonth
ORDER BY
  JoinMonth ASC;
