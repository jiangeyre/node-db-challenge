
exports.seed = function(knex) {
  return knex('resources').del()
    .then(function () {
      return knex('resources').insert([
        {
          id: 1,
          name: 'Ritual Sacrifice',
          description: 'Okay, I surrender to the DARK SIDE.'
        },
        {
          id: 2,
          name: 'Escape',
          description: 'What the heck is going on???!!!! I need to get out!'
        },
        {
          id: 3,
          name: 'Dance',
          description: 'Dance around a flower pole.'
        },
        {
          id: 4,
          name: 'Scream',
          description: 'Loud, unintelligible sounds that resonate with everyone because you are angry, frustrated, fearful, etc.'
        }
      ]);
    });
}; 
