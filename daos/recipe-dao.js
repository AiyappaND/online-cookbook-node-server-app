import recipeModel from '../models/recipe-model.js';

export const findRecipes = () => recipeModel.find().sort('-createdAt');

export const createRecipe = (recipe) => recipeModel.create(recipe);

export const deleteRecipe = (rid) => recipeModel.deleteOne({_id: rid});

export const updateRecipe = (rid, recipe) => recipeModel.updateOne({_id: rid}, {$set: recipe})

export const findRecipeById = (rid) => recipeModel.findById(rid);

export const findLocalRecipeByName = (name) => recipeModel.find({title: { $regex: name, $options: 'i' }})

export const findLocalRecipesByUserName = (username) => recipeModel.find({author: username}).sort('-createdAt');
