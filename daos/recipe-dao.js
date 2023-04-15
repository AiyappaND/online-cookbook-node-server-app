import recipeModel from '../models/recipe-model.js';

export const findRecipes = () => recipeModel.find();

export const createRecipe = (recipe) => recipeModel.create(recipe);

export const deleteRecipe = (rid) => recipeModel.deleteOne({_id: rid});

export const updateRecipe = (rid, recipe) => recipeModel.updateOne({_id: rid}, {$set: recipe})