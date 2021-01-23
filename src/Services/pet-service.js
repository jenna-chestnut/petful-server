const Queue = require('../queue');
const { cats, dogs } = require('../store');

const DogQ = new Queue();
const CatQ = new Queue();

cats.forEach(el => {
  CatQ.enqueue(el);
});

dogs.forEach(el => {
  DogQ.enqueue(el);
});

module.exports = {
  get() {

    let firstPets = {
      cat : CatQ.show(),
      dog : DogQ.show()
    };

    if (!firstPets.cat) {
      cats.forEach(el => {
        CatQ.enqueue(el);
      });
      firstPets.cat = CatQ.show();
    }

    if (!firstPets.dog) {
      dogs.forEach(el => {
        DogQ.enqueue(el);
      });
      firstPets.dog = DogQ.show();
    }
    
    return firstPets;
  },

  adopt(pet) {
    let toAdopt = pet === 'cat' 
      ? CatQ : DogQ;
    return toAdopt.dequeue();
  }
};