
exports.up = knex => knex.schema.createTable("tags", table => {
  table.increments("id");
  table.text("name").notNullable();

  table.integer("user_id").references("id").inTable("users").onDelete("CASCADE");
  table.integer("user_id").references("id").inTable("users");
});
 
 exports.dow = knex => knex.schema.createTable("tags");