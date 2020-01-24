const db = require('../data/db-config');

module.exports = {
  find, 
  insert
};

function find() {
    return db('resources')
};

function insert(data) {
    return db('resources')
        .insert(data, 'id')
            .then(([ id ]) => {
                return findById(id)
            })
};