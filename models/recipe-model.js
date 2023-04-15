import mongoose from 'mongoose';

import recipeSchema from '../schemas/recipe-schema.js'

const recipeModel = mongoose
    .model('RecipeModel', recipeSchema);
export default recipeModel;
