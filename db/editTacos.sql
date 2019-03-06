UPDATE tacos
SET quantity = $2, rating = $3, description = $4, source = $5
WHERE taco_id = $1;

SELECT * FROM tacos;