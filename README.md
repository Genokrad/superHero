Backend endpoints GET http://localhost:3006/api/heroes?page=1&pageSize=5
http://localhost:3006/api/heroes/HERO ID

POST http://localhost:3006/api/heroes -----OBJ---- Key: jsonData, Value:
{"nickname": "benzaMen", "real_name": "Clark Kent", "origin_description": "he
was born Kal-El on the planet Krypton, before being rocketed to Earth as an
infant by his scientist father Jor-El, moments before Krypton's destruction...",
"superpowers": "solar energy absorption and healing factor, solar flare and heat
vision, solar invulnerability, flight...", "catch_phrase": "Look, up in the sky,
it's a bird, it's a plane, it's Superman!"} Key: image Value: Photo.jpg

PUT http://localhost:3006/api/heroes/c81444a3-4fa5-4dc6-a755-85c3d508731b Key:
jsonData, Value: {"nickname": "benzaMen", "real_name": "Clark Kent",
"origin_description": "he was born Kal-El on the planet Krypton, before being
rocketed to Earth as an infant by his scientist father Jor-El, moments before
Krypton's destruction...", "superpowers": "solar energy absorption and healing
factor, solar flare and heat vision, solar invulnerability, flight...",
"catch_phrase": "Look, up in the sky, it's a bird, it's a plane, it's
Superman!"} Key: image Value: Photo.jpg

DEL http://localhost:3006/api/heroes/HERO ID
