const Queue = require('../queue');
const { people } = require('../store');

const PeopleQ = new Queue();

people.forEach(el => {
  PeopleQ.enqueue(el);
});

const fillerNames = ['Babby', 'Artia', 'Borksy'];

const all = () => {
  let peopleList = PeopleQ.all();

  if (peopleList.length === 0) {
    fillerNames.forEach(el => {
      PeopleQ.enqueue(el);
    });
  }

  return PeopleQ.all();
};

module.exports = {
  all,
  dequeue() { return PeopleQ.dequeue(); },
  enqueue(name) { PeopleQ.enqueue(name); }
};