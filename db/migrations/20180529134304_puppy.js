
exports.up = function(knex, Promise) {
    return knex.schema.createTable('puppy', (table) => {
        table.increments();
        table.string('name');
        table.string('breed');
        table.integer('weight');
        table.boolean('adopted');
        table.timestamps(true,true);
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('puppy');
};
