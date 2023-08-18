/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('producto').then((exists) => {
        if (!exists) {
            return knex.schema.createTable("producto", function (table) {
              table.increments("sku").primary();
              table.string("nombre").notNullable();
              table.string("descripcion").notNullable();
              table.float("precio").notNullable()
              
            });
          }
    });
};
  


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
