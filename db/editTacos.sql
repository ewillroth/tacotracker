UPDATE tacos
SET quantity = $2, rating = $3, description = $4, pic = $5, source = $6
WHERE taco_id = $1;

SELECT * FROM tacos;