'use strict';

class Foods {

  constructor(){
    this.id = 0;
    this.db = [];
  }

  read(id){
    if(id){
      return this.db.find(food => food.id === id);
    } else {
      return this.db;
    }
  }
  
  create(newObj){
    let newFood = {
      id: this.id += 1,
      data: newObj,
    }
    this.db.push(newFood);
    return newFood;
  }

  update(id, newObj){
    for(let i = 0; i < this.db.length; i++){
      if(this.db[i].id === id) {
        this.db[i].data = newObj;
        return this.db[i];
      }
    }
  }

  destroy(id){
    delete this.db[id];
    return this.db[id];
  }
}


module.exports = Foods;
