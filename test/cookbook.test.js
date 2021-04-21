const { Cookbook } = require('../src/cookbook');

describe('Cookbook', () => {
  // Define test cookbook
  const cBook = new Cookbook();
  const recipeName = 'Cereal';
  const recipeIng = ['Milk', 'Cereal'];
  
  describe('Adding recipes', () => {
    test('should allow a recipe to be added', () => {
      
      const expectedRec = {'Cereal': ['Milk', 'Cereal']};

      cBook.addRecipe(recipeName, recipeIng)
    
      expect(cBook.recipes).toEqual(expectedRec);

    });
  });
  
  describe('Listing recipes', () => {
    test('should allow the recipes to be listed', () => {

      const expectedRec = ["Cereal"];

      expect(cBook.listRecipes()).toEqual(expectedRec);

    });
  });
  
  describe('Retrieving a recipe', () => {
    test('should allow the ingredients for a recipe to be retrieved', () => {
      const recipeName = 'Cereal';
      const expectedIng = ['Milk', 'Cereal'];

      expect(cBook.getRecipe(recipeName)).toEqual(expectedIng);
    });
  });
  
  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {
      
    });
  });
});
