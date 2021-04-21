const { Cookbook } = require('./cookbook');

class CookbookCli {
  constructor(cookbook) {
    this.cookbook = cookbook;
  }
  
  run(command, ...args) {
    switch (command) {
      case 'list': return this.list();
      case 'add': return this.add(...args);
      case 'get': return this.get(...args);
      case 'remove': return this.remove(...args);
      default: return `Whoops, the following command is unsupported: ${command}.`;
    }
  }
  
  list() {
    // Check if the returned array is empty or not
    if(this.cookbook.listRecipes().length){
      return `You have the following recipes: ${this.cookbook.listRecipes().join(',')}`;
    }
    else{
      return `Your recipes are in another cookbook (Empty).`;
    }
  }
  
  add(name, ingredients) {
    if(this.cookbook.getRecipe(name)){
      return 'There can only be one (Duplicate entry).'
    }
    else {
      this.cookbook.addRecipe(name, ingredients);
      return `Successfully added the following recipe: ${name}`;
    }
  }
  
  get(name) {
    if(this.cookbook.getRecipe(name)){
      return `The ingredients for ${name} are: ${this.cookbook.getRecipe(name)}`;
    }
    else{
      return `These are not the recipes you are looking for (Does not exist).`;
    }
  }
  
  remove(name) {
    if(this.cookbook.getRecipe(name)){
      this.cookbook.removeRecipe(name);
      return `Successfully removed the following recipe: ${name}`;
    }
    else {
      return `I was never here (Cannot delete a recipe that does not exist)`;
    }
  } 
}

module.exports = { CookbookCli };
