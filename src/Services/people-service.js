const Queue = require('../queue');
const { people } = require('../store');

const PeopleQ = new Queue();

people.forEach(el => {
  PeopleQ.enqueue(el);
});

const fillerNames = ['Babby', 'Artia', 'Borksy', 'Macaroni', 'Digital', 'Essie', 'Green', 'Pinny', 'Dollah'];

const all = () => {
  let peopleList = PeopleQ.all();

  if (peopleList.length === 0) {
    let random = [
      fillerNames[Math.floor(Math.random * 9)],
      fillerNames[Math.floor(Math.random * 9)],
      fillerNames[Math.floor(Math.random * 9)]
    ];

    random.forEach(el => {
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