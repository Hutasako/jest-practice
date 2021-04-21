const { Cookbook } = require('../src/cookbook');
const { CookbookCli } = require('../src/cookbook-cli');

describe('CookbookCli', () => {
  const cBook = new Cookbook();
  const recipeName = 'Cereal';
  const recipeIng = ['Milk', 'Cereal'];
  const cBookCli = new CookbookCli(cBook);
  
  describe('Adding recipes', () => {
    test('should accept the recipe information and display the correct message', () => {
      
      const runAdd = cBookCli.run('add', recipeName, recipeIng);
      
      expect(runAdd).toBe(`Successfully added the following recipe: ${recipeName}`);
    });
  });
  
  describe('Adding a duplicate recipe', () => {
    test('should accept the recipe information and display the correct message', () => {
      
      const runAdd = cBookCli.run('add', recipeName, recipeIng);
      
      expect(runAdd).toBe('There can only be one (Duplicate entry).');
    });
  });
  
  describe('Listing recipes', () => {
    test('should display the correct message listing all of the recipe names', () => {
      const runList = cBookCli.run('list'); 
      
      expect(runList).toBe(`You have the following recipes: ${recipeName}`)
      
      
    });
  });
  
  describe('Listing empty cookbook', () => {
    test('should display the correct message for an empty cookbook', () => {
      
      const emptyBook = new Cookbook();
      const emptyBookCli = new CookbookCli(emptyBook);
      const runEmptyList = emptyBookCli.run('list');
      
      expect(runEmptyList).toBe(`Your recipes are in another cookbook (Empty).`);
      
    })
  })
  
  describe('Retrieving a recipe', () => {
    test('should display the ingredients required to make the specified recipe', () => {
      const runGet = cBookCli.run('get', `${recipeName}`);
      
      expect(runGet).toBe(`The ingredients for ${recipeName} are: ${recipeIng}`);
    });
  });
  
  describe('Retrieving a recipe that does not exist', () => {
    test('should display the ingredients required to make the specified recipe', () => {
      const runGet = cBookCli.run('get', `Poutine`);
      
      expect(runGet).toBe(`These are not the recipes you are looking for (Does not exist).`);
    });
  });

  describe('Deleting a recipe', () => {
    test('should accept the recipe name and display the correct message', () => {
      const runDel = cBookCli.run('remove', `${recipeName}`);
      
      expect(runDel).toBe(`Successfully removed the following recipe: ${recipeName}`);
    });
  });

  describe('Deleting a recipe that does not exist', () => {
    test('should accept the recipe name and display the correct message', () => {
      const runDel = cBookCli.run('remove', `Poutine`);
      
      expect(runDel).toBe(`I was never here (Cannot delete a recipe that does not exist)`);
    });
  });
});
