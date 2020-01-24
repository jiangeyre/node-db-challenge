const db = require('../data/db-config');

module.exports = {
  find, 
  insert
}

function find() {
    return db('tasks')
};

function insert(data) {
    return db('tasks')
        .insert(data, 'id')
            .then(([ id ]) => {
                return findById(id)
            })
};