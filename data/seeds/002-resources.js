
exports.seed = function(knex) {
  return knex('resources').truncate()
    .then(function () {
      return knex('resources').insert([
        { name: 'Red Bull', 
        description: 'Drink up, brother.' },
        { name: 'Refrigerator',
        description: 'Best be keeping it chill.' }
      ]);
    });
};
