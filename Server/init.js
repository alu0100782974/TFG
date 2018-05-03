use tfg;
db.createUser({ user: "angel", pwd: "angel", roles: [{ role: "readWrite", db: "tfg" }, { role: "readWrite", db: "admin" }] });
db.createCollection("clients");

db.createCollection("trucks");

db.createCollection("services");