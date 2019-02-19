const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;

  beforeEach(function () {
    park = new Park("Jurassic World",50);
    trex = new Dinosaur("t-rex",'carnivore',50);
    stego = new Dinosaur("stegosaurus",'herbivore',25);
    braco = new Dinosaur("brachiosaurus",'herbivore',30);
    raptor = new Dinosaur("Velociraptor",'carnivore',45);
    galli = new Dinosaur("gallimimus",'omnivore',35);

    park.addDino(trex);
    park.addDino(stego);
    park.addDino(braco);
    park.addDino(raptor);
    park.addDino(raptor);
    park.addDino(galli);

  })

  it('should have a name',function(){
    actual = park.name;
    expected = "Jurassic World";
    assert.strictEqual(actual,expected);
  });

  it('should have a ticket price',function(){
    actual = park.price;
    expected = 50;
    assert.strictEqual(actual,expected);
  });

  it('should have a collection of dinosaurs',function(){
    actual = park.dinoCount();
    expected = 6;
    assert.strictEqual(actual,expected);

  });

  it('should be able to add a dinosaur to its collection',function(){
    actual = park.dinoCount();
    expected = 6;
    assert.strictEqual(actual,expected);
});

  it('should be able to remove a dinosaur from its collection',function(){

    park.removeDino();
    actual = park.dinoCount();
    expected = 5;
    assert.strictEqual(actual,expected);

  });

  it('should be able to find the dinosaur that attracts the most visitors',function(){
    actual = park.mostVisitorsDino();
    expected = "t-rex";
    assert.strictEqual(actual.species,expected);

  });

  it('should be able to find all dinosaurs of a particular species',function(){
    actual = park.dinoBySpecies('Velociraptor');
    expected = 2;
    assert.strictEqual(actual.length,expected);
  });

  it('should be able to remove all dinosaurs of a particular species',function(){
    park.removeBySpecies('Velociraptor');
    actual = park.dinoCount();
    expected = 4;

  });

  it('should be able to count the total number of visitors per day',function(){
    actual = park.visitorsPerDay();
    expected = 230
    assert.strictEqual(actual,expected);
  });

  it('should be able to count the total number of visitors per year',function (){
    actual = park.visitorsPerYear();
    expected = 83950;
    assert.strictEqual(actual,expected);

  });

  it('should be able to calculate the total revenue per year',function(){
    actual = park.totalRevenue();
    expected = 4197500
    assert.strictEqual(actual,expected);
  });
  
  it('should be able to provide an object with the diet/numbers',function(){
    let numbers = {
      carnivore: 3,
      herbivore: 2,
      omnivore: 1
    };

    actual = park.dietNumbers();
    expected = numbers;
    assert.deepStrictEqual(actual,expected);
  });

});
