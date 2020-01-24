
exports.seed = function(knex) {
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert([
        {
          id: 1,
          project_id: 1,
          description: 'Burn the witch',
          notes: 'Persecution at its finest.',
          completed: false 
        },
        {
          id: 2,
          project_id: 2,
          description: 'Kill the seabird',
          notes: 'HARK, it is bad luck to kill a seabird.',
          completed: false 
        },
        {
          id: 3,
          project_id: 3,
          description: 'Drink the weird tea.',
          notes: 'Make unintelligle screams.',
          completed: false 
        },
        {
          id: 4,
          project_id: 4,
          description: 'Make a nut chocolate cake',
          notes: 'Hope ya do not have allergies',
          completed: false
        }
      ]);
    });
};
