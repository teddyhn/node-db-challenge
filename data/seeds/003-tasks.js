
exports.seed = function(knex) {
  return knex('tasks').truncate()
    .then(function () {
      return knex('tasks').insert([
        { description: "Get Red Bull from refrigerator",
        notes: "It's gotta be somewhere right?",
        project_id: 1 },
        { description: "Drink up", 
        notes: "Feel it course through your veins...",
        project_id: 1 }
      ]);
    });
};
