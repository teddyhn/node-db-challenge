
exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        { name: 'Drink Red Bull', 
        description: 'Acquire liquid energy.' }
      ]);
    });
};
