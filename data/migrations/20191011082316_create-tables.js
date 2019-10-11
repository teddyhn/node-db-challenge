
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('id');
        tbl.string('name', 128)
        .notNullable();
        tbl.string('description', 1024);
        tbl.boolean('completed')
        .notNullable()
        .defaultTo(false);
    })
    .createTable('resources', tbl => {
        tbl.increments('id');
        tbl.string('name', 128)
        .notNullable()
        .unique();
        tbl.string('description', 1024);
    })
    .createTable('tasks', tbl => {
        tbl.increments('id');
        tbl.string('description', 1024)
        .notNullable();
        tbl.string('notes', 1024);
        tbl.boolean('completed')
        .notNullable()
        .defaultTo(false);
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
