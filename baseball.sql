-- Heaviest Lifters
SELECT teams.name, batting.yearid, AVG(weight)
FROM people
JOIN batting 
ON people.playerid = batting.playerid
JOIN teams
ON batting.teamid = teams.teamid
GROUP BY 1, 2
ORDER BY 3 DESC
LIMIT 5;

-- Winner Goes to Chicago White Sox - year 2009, 2014, 2008



-- shortest sluggers
SELECT teams.name, batting.yearid,  AVG(height)
FROM people
JOIN batting 
ON people.playerid = batting.playerid
JOIN teams
ON teams.teamid = batting.teamid
GROUP BY 1, 2
ORDER BY 3 ASC
LIMIT 5;

-- Winner Middletown Mansfields - 66.5714285714285714 - 1872


-- BIggest Spenders

SELECT teams.name, SUM(salary)
FROM salaries
LEFT JOIN teams 
ON teams.teamid = salaries.teamid
 AND teams.yearid = salaries.yearid
GROUP BY 1, salaries.yearid
ORDER BY 2 DESC
LIMIT 5; 
--  Winner: New York Yankees - 231978886;



-- Most bang for their Buck in 2010
SELECT teams.name, teams.w, salaries.yearid, ROUND(SUM(salary)/teams.w)
FROM salaries
LEFT JOIN teams 
    ON teams.teamid = salaries.teamid
        AND teams.yearid = salaries.yearid
        WHERE teams.yearid = 2010
GROUP BY 1, 2, 3
ORDER BY 4 ASC
LIMIT 5;

-- San Diego Padres 419992

