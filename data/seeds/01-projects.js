
exports.seed = function(knex) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        {
          id: 1,
          name: 'The VVitch',
          description: 'I am being persecuted by my family. I must secretly kill off each member of my family as a service to my lord, Black Phillip.',
          completed: false
        },
        {
          id: 2,
          name: 'Lighthouse',
          description: 'I have been sequestered on this cursed rock with a farting old fart who speaks in riddles and of Neptune far too much. DAMN THESE CURSED GULLS.',
          completed: false
        },
        {
          id: 3,
          name: 'Midsommar',
          description: 'My boyfriend is an idiot. He manipulates everyone around him. He wants to go abroad with his bros to this random festival in Sweden. I need to realign my chakras and find the queen inside.',
          completed: false
        },
        {
          id: 4,
          name: 'Hereditary',
          description: 'Bad luck befalls my entire family. I may have accidentally not had a close eye on my sister in hopes of getting with the girl I have been crushing on. My sister suffers an allergic reaction and gets her head bonked off. My mother hates me. I become the vessel for lord Paimon.',
          completed: false
        }
      ]);
    });
};
