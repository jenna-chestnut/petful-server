const Queue = require('../queue');
const { people } = require('../store');

const PeopleQ = new Queue();

people.forEach(el => {
  PeopleQ.enqueue(el);
});

module.exports = PeopleQ;