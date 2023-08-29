/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('venta').then((exists) => {
        if (!exists) {
            return knex.schema.createTable("venta", function (table) {
              table.increments("id").primary();
              table.integer("dni_cliente").notNullable();
              table.foreign("dni_cliente").references("cliente.dni");
              
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
