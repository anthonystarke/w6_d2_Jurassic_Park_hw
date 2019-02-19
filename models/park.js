const Park = function(name,price){

  this.name = name;
  this.price = price
  this.dinoList = [];
};

Park.prototype.addDino = function(dino){
  this.dinoList.push(dino);
};

Park.prototype.dinoCount = function(){
  return this.dinoList.length;
};

Park.prototype.removeDino = function(){
  this.dinoList.pop();
};

Park.prototype.mostVisitorsDino = function(){

  let dinoToBeat;
  // console.log(dinoToBeat);
  for (var dino of this.dinoList){
    if (dinoToBeat === undefined)
    {
      dinoToBeat = dino;
    } else if(dino.guestsAttractedPerDay > dinoToBeat.guestsAttractedPerDay){
      dinoToBeat = dino;
    }
  }
  return dinoToBeat;
};

Park.prototype.dinoBySpecies = function(species){

  let dinoBySpecies = [];

  for (let dino of this.dinoList){
    if(dino.species === species){
      dinoBySpecies.push(dino);
    }
  }
  return dinoBySpecies;
};

Park.prototype.removeBySpecies = function(species){

  for(let i = 0; i < this.dinoList.length;i++){
    if (this.dinoList[i].species === species){
      this.dinoList.pop(i);
    }
  }
}

Park.prototype.visitorsPerDay = function(){

  let totalVisitors = 0;
  for (let dino of this.dinoList){
    totalVisitors += dino.guestsAttractedPerDay;
  }
  return totalVisitors;
}

Park.prototype.visitorsPerYear = function(){

  let totalVisitors = this.visitorsPerDay();
  return totalVisitors * 365;

};

Park.prototype.totalRevenue = function(){
  let totalRevenue = this.visitorsPerYear();
  return totalRevenue * 50;
};

Park.prototype.dietNumbers = function(){

  let dietNumbers = {
    carnivore: 0,
    herbivore: 0,
    omnivore: 0
  };

  for(let dino of this.dinoList){

    switch(dino.diet){
      case "carnivore":
        dietNumbers['carnivore'] += 1;
      break;
      case "herbivore":
        dietNumbers['herbivore'] += 1;
      break;
      case "omnivore":
        dietNumbers['omnivore'] += 1;
      break;
    }
  }
  return dietNumbers;
};

module.exports = Park;
