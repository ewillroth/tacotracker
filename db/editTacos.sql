UPDATE tacos
SET quantity = $2, rating = $3, description = $4, pic = $5, from = $6
WHERE taco_id = $1;