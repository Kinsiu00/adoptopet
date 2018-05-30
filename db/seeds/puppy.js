
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('puppy').del()
    .then(function () {
      // Inserts seed entries
      return knex('puppy').insert([
        {id: 1, name: 'Bosson', breed: 'Terrier', weight: 31, adopted: true},
        {id: 2, name: 'Jackie', breed: 'Labrador', weight: 2, adopted: true},
        {id: 3, name: 'George', breed: 'Chimpanzee', weight: 44, adopted: true},
        {id: 4, name: 'Pepper', breed: 'Rat Terrier', weight: 18, adopted: true},
        {id: 5, name: 'Blueberry', breed: 'English Muffin', weight: 1, adopted: false},
        {id: 6, name: 'Joker', breed: 'texas holdem', weight: 122, adopted: false},

      ]);
    });
};
