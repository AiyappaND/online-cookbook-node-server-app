import * as recipeDao from '../daos/recipe-dao.js'

const createRecipe = async (req, res) => {
    const newRecipe = req.body;
    const insertedRecipe = await recipeDao
        .createRecipe(newRecipe);
    res.json(insertedRecipe);
}
const findRecipes  = async (req, res) => {
    const recipes = await recipeDao.findRecipes();
    res.json(recipes);
}
const updateRecipe = async (req, res) => {
    const recipeIdToUpdate = req.params['rid'];
    const updates = req.body;
    const status = await recipeDao
        .updateRecipe(recipeIdToUpdate,
            updates);
    res.json(status);
}
const deleteRecipe = async (req, res) => {
    const recipeIdToDelete = req.params['rid'];
    const status = await recipeDao
        .deleteRecipe(recipeIdToDelete);
    res.json(status);
}

const getOneRecipe = async (req, res) => {
    const recipeToFind = req.params['rid'];
    const foundRecipe = await recipeDao.findRecipeById(recipeToFind);
    res.json(foundRecipe);
}

const getLocalMatchingRecipe = async (req, res) => {
    const recipeName = req.params['name'];
    const recipesFound = await recipeDao.findLocalRecipeByName(recipeName);
    res.json(recipesFound);
}

const getLocalRecipeByUsername = async (req, res) => {
    const username = req.params['username'];
    const recipesFound = await recipeDao.findLocalRecipesByUserName(username);
    res.json(recipesFound);
}

export default (app) => {
    app.post('/api/recipes', createRecipe);
    app.get('/api/recipes', findRecipes);
    app.put('/api/recipes/:rid', updateRecipe);
    app.delete('/api/recipes/:rid', deleteRecipe);
    app.get('/api/recipes/getOne/:rid', getOneRecipe);
    app.get('/api/recipes/findLocal/:name', getLocalMatchingRecipe);
    app.get('/api/recipes/findByUsername/:username', getLocalRecipeByUsername);
}
