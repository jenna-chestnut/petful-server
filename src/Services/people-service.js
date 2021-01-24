const Queue = require('../queue');
const { people } = require('../store');

const PeopleQ = new Queue();

people.forEach(el => {
  PeopleQ.enqueue(el);
});

const fillerNames = ['Babby', 'Artia', 'Borksy', 'Macaroni', 'Digital', 'Essie', 'Green', 'Pinny', 'Dollah', 'Tuesday', 'August', 'Sunny', 'Juniper', 'Cascada', 'Cheddar'];

const all = () => {
  let peopleList = PeopleQ.all();

  if (peopleList.length === 0) {
    const pplQ = () => PeopleQ.enqueue(
      fillerNames[Math.floor(Math.random() * fillerNames.length)]
    );
    pplQ(); pplQ();
  }

  return PeopleQ.all();
};

module.exports = {
  all,
  dequeue() { return PeopleQ.dequeue(); },
  enqueue(name) { PeopleQ.enqueue(name); }
};