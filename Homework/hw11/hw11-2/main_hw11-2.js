// #whXxOBlYS0H
//
// - взяти https://dummyjson.com/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.

const recipesDiv = document.getElementById("recipes");

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(recipesObject => {
        const {recipes} = recipesObject;
        console.log(recipes);

        for (const recipe of recipes) {
            const h2 = document.createElement('h2');
            h2.innerText = recipe.name;

            const div = document.createElement('div');
            div.classList.add('recipe-container');

            const divWithInfo = document.createElement('div');
            divWithInfo.innerText = `
                id: ${recipe.id},
                prepTimeMinutes: ${recipe.prepTimeMinutes},
                cookTimeMinutes: ${recipe.cookTimeMinutes},
                servings: ${recipe.servings},
                difficulty: ${recipe.difficulty},
                cuisine: ${recipe.cuisine},
                caloriesPerServing: ${recipe.caloriesPerServing},
                tags: ${recipe.tags.join(', ')},
                userId: ${recipe.userId},
                rating: ${recipe.rating},
                reviewCount: ${recipe.reviewCount},
                mealType: ${recipe.mealType.join(', ')},
            `


            const ingredientInfo = document.createElement('div');
            ingredientInfo.innerText = 'Ingredients:';

            const ul = document.createElement('ul');
            for (const ingredient of recipe.ingredients) {
                const li = document.createElement('li');
                li.innerText = `${ingredient}`
                ul.appendChild(li);
            }
            ingredientInfo.appendChild(ul);



            const instructionInfo = document.createElement('div');
            instructionInfo.innerText = 'Instructions:';

            const ol = document.createElement('ol');
            for (const instruction of recipe.instructions) {
                const li = document.createElement('li');
                li.innerText = instruction;
                ol.appendChild(li);
            }
            instructionInfo.appendChild(ol);



            const img = document.createElement('img');
            img.src = recipe.image;
            img.classList.add('recipe-image');



            div.append(h2, divWithInfo, ingredientInfo, instructionInfo, img);
            recipesDiv.appendChild(div);
        }
    });
