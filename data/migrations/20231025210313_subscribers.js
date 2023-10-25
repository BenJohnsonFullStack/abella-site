/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("subscribers", (tbl) => {
    tbl.increments();
    tbl.string("first_name", 128).notNullable();
    tbl.string("last_name", 128).notNullable();
    tbl.string("email").notNullable().unique();
    tbl.string("phone").notNullable().unique();
    tbl.string("street_address").notNullable().unique();
    tbl.string("city").notNullable();
    tbl.string("state").notNullable();
    tbl.string("zip_code").notNullable();
    tbl.string("date_of_birth").notNullable();
    tbl.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("subscribers");
};
