const recipes = {
      idli: {
      title: "Idli",
      image: "idli.jpg",
      ingredients: [
        "2 cups Rice",
        "1 cup Urad Dal",
        "Salt to taste",
        "Water as needed"
      ],
      steps: [
        "Soak rice and urad dal separately for 4-6 hours.",
        "Grind into a smooth batter and ferment overnight.",
        "Add salt and mix well.",
        "Steam the batter in idli molds for 10-12 minutes.",
        "Serve hot with chutney and sambar."
      ]
    },
    poha: {
      title: "Poha",
      image: "poha.jpg",
      ingredients: [
        "2 cups Flattened Rice (Poha)",
        "1 Onion, chopped",
        "1 Green Chili, chopped",
        "1 tsp Mustard Seeds",
        "Curry Leaves, Turmeric, Salt"
      ],
      steps: [
        "Wash poha and let it drain.",
        "Heat oil, add mustard seeds, curry leaves, and green chili.",
        "Add onions, turmeric, and salt; sauté until onions soften.",
        "Add poha and mix well. Cook for 2-3 minutes.",
        "Serve hot with a squeeze of lemon."
      ]
    },
    alooParatha: {
      title: "Aloo Paratha",
      image: "parata.jpg",
      ingredients: [
        "2 cups Wheat Flour",
        "2 Potatoes, boiled and mashed",
        "1 tsp Cumin",
        "Coriander, Chili Powder, Salt to taste"
      ],
      steps: [
        "Prepare dough with wheat flour, water, and salt.",
        "Mix mashed potatoes with spices to create filling.",
        "Roll dough, stuff with filling, and seal.",
        "Roll again and cook on a hot tawa with ghee.",
        "Serve hot with yogurt or pickle."
      ]
    },
    jamun: {
      title: "Gulab Jamun",
      image: "jamun.webp",
      ingredients: [
        "1 cup milk powder",
        "1/4 cup all-purpose flour",
        "1/4 tsp baking soda",
        "2 tbsp ghee",
        "3-4 tbsp milk",
        "1 cup sugar",
        "1 cup water",
        "Cardamom pods (optional)",
      ],
      steps: [
        "Mix milk powder, flour, baking soda, and ghee.",
        "Add milk to form a soft dough and roll into small balls.",
        "Prepare sugar syrup by boiling sugar, water, and cardamom.",
        "Deep fry the balls until golden brown and soak them in warm syrup.",
      ],
    },
    rasmalai: {
      title: "Rasmalai",
      image: "ras.jpg",
      ingredients: [
        "10 rasgullas (store-bought or homemade)",
        "1 liter full-fat milk",
        "1/2 cup sugar",
        "1/2 tsp cardamom powder",
        "A few saffron strands",
        "Chopped nuts (almonds, pistachios) for garnish",
      ],
      steps: [
        "Boil milk and reduce to half while stirring occasionally.",
        "Add sugar, cardamom powder, and saffron to the milk.",
        "Squeeze the syrup from the rasgullas gently and add to the milk.",
        "Simmer for 2-3 minutes, then chill in the refrigerator.",
        "Garnish with chopped nuts before serving.",
      ],
    },
    fruitSalad: {
      title: "Fruit Salad",
      image: "fruit.jpg",
      ingredients: [
        "1 apple, diced",
        "1 banana, sliced",
        "1 orange, segmented",
        "1/2 cup grapes",
        "1/4 cup pomegranate seeds",
        "2 tbsp honey",
        "1 tbsp lemon juice",
      ],
      steps: [
        "Combine all the fruits in a large bowl.",
        "Mix honey and lemon juice in a small bowl.",
        "Drizzle the dressing over the fruits and toss gently.",
        "Chill in the refrigerator before serving.",
      ],
    },
    upma: {
      title: "Upma",
      image: "Vegetable-Upma-3.jpg",
      ingredients: [
        "1 cup Semolina (Rava)",
        "1 Onion, chopped",
        "1 tsp Mustard Seeds",
        "Curry Leaves, Green Chili, Water, Salt"
      ],
      steps: [
        "Dry roast semolina until fragrant and set aside.",
        "Heat oil, add mustard seeds, curry leaves, and chili.",
        "Add onions and sauté until translucent.",
        "Add water and bring to a boil. Add salt.",
        "Slowly add semolina while stirring to avoid lumps. Cook until done."
      ]
    },
    dosa: {
      title: "Dosa",
      image: "Best-Crispy-Plain-Dosa-Recipe.jpg",
      ingredients: [
        "2 cups Rice",
        "1 cup Urad Dal",
        "Salt to taste",
        "Oil for cooking"
      ],
      steps: [
        "Soak rice and urad dal separately for 4-6 hours.",
        "Grind into a smooth batter and ferment overnight.",
        "Add salt and mix well.",
        "Pour batter on a hot tawa and spread into a thin circle.",
        "Drizzle oil and cook until golden brown. Serve with chutney."
      ]
    },
  
  
    dalTadka: {
      title: "Dal Tadka",
      image: "daal.jpg",
      ingredients: [
        "1 cup Toor Dal",
        "1 Tomato, chopped",
        "1 Onion, chopped",
        "Ghee, Cumin, Garlic, Turmeric, Chili Powder"
      ],
      steps: [
        "Cook dal with water, turmeric, and salt.",
        "Heat ghee, add cumin, garlic, onions, and tomatoes.",
        "Add cooked dal and simmer for 5 minutes.",
        "Garnish with coriander and serve hot with rice."
      ]
    },
    rajmaChawal: {
      title: "Rajma Chawal",
      image: "rajma.jpg",
      ingredients: [
        "1 cup Kidney Beans (Rajma)",
        "2 Onions, chopped",
        "2 Tomatoes, pureed",
        "Rice, Spices (Garam Masala, Turmeric)"
      ],
      steps: [
        "Soak and pressure cook rajma until soft.",
        "Sauté onions and tomatoes with spices.",
        "Add rajma and simmer until thick.",
        "Serve hot with steamed rice."
      ]
    },
    paneerButterMasala: {
      title: "Paneer Butter Masala",
      image: "paneer.jpg",
      ingredients: [
        "200g Paneer",
        "2 tbsp Butter",
        "1 cup Tomato Puree",
        "1/2 cup Cream",
        "Spices (Turmeric, Chili Powder, Garam Masala)"
      ],
      steps: [
        "Heat butter, add tomato puree and spices, cook for 5 minutes.",
        "Add cream and paneer, cook for another 5 minutes.",
        "Serve hot with naan or rice."
      ]
    },
    choleBhature: {
      title: "Chole Bhature",
      image: "chole.jpg",
      ingredients: [
        "1 cup Chickpeas",
        "2 Onions, chopped",
        "2 Tomatoes, pureed",
        "Spices (Chole Masala, Turmeric)"
      ],
      steps: [
        "Soak and cook chickpeas until soft.",
        "Sauté onions and tomatoes with spices.",
        "Add chickpeas and simmer until thick.",
        "Serve hot with fried bhature."
      ]
    },
    vegBiryani: {
      title: "Veg Biryani",
      image: "VegBiryani.webp",
      ingredients: [
        "2 cups Basmati Rice",
        "1 cup Mixed Vegetables",
        "Spices (Biryani Masala, Cloves, Cardamom)",
        "Saffron and Milk"
      ],
      steps: [
        "Cook rice until 70% done.",
        "Sauté vegetables with spices.",
        "Layer rice and vegetables, add saffron milk.",
        "Cook on low heat for 20 minutes.",
        "Serve hot with raita."
      ]
    },  
  
 
     butterNaan: {
    title: "Butter Naan",
    image: "naan.jpg",
    ingredients: [
      "2 cups All-Purpose Flour",
      "1/2 cup Yogurt",
      "1 tsp Baking Powder",
      "Butter"
    ],
    steps: [
      "Prepare dough with flour, yogurt, and baking powder.",
      "Roll out and cook on a tawa or oven.",
      "Brush with butter and serve hot."
    ]
  },
  bainganBharta: {
    title: "Baingan Bharta",
    image: "barta.jpg",
    ingredients: [
      "1 Large Eggplant",
      "2 Tomatoes, chopped",
      "1 Onion, chopped",
      "Garlic, Ginger, Spices"
    ],
    steps: [
      "Roast eggplant and mash.",
      "Sauté onions, tomatoes, garlic, and spices.",
      "Add mashed eggplant and cook for 10 minutes.",
      "Serve hot with roti."
    ]
  },
  fishCurry: {
    title: "Fish Curry",
    image: "fish.jpg",
    ingredients: [
      "500g Fish",
      "2 Onions, chopped",
      "2 Tomatoes, pureed",
      "Coconut Milk, Spices"
    ],
    steps: [
      "Marinate fish with turmeric and salt.",
      "Sauté onions, tomatoes, and spices.",
      "Add coconut milk and fish, simmer until cooked.",
      "Serve hot with steamed rice."
    ]
  },
  matarPaneer: {
    title: "Matar Paneer",
    image: "matar.jpg",
    ingredients: [
      "200g Paneer",
      "1 cup Green Peas",
      "2 Tomatoes, pureed",
      "Spices (Garam Masala, Turmeric)"
    ],
    steps: [
      "Sauté tomatoes and spices.",
      "Add green peas and cook until soft.",
      "Add paneer and simmer for 5 minutes.",
      "Serve hot with roti or rice."
    ]
  },
  palakPaneer: {
    title: "Palak Paneer",
    image: "palak.jpg",
    ingredients: [
      "200g Paneer",
      "1 bunch Spinach",
      "1 Onion, chopped",
      "Garlic, Spices"
    ],
    steps: [
      "Blanch and puree spinach.",
      "Sauté onions, garlic, and spices.",
      "Add spinach puree and paneer, cook for 5 minutes.",
      "Serve hot with naan."
    ]
  }
};


function showRecipe(recipeKey) {
  const recipe = recipes[recipeKey];
  document.getElementById("recipeTitle").innerText = recipe.title;
  document.getElementById("recipeImage").src = recipe.image;
  document.getElementById("ingredientsList").innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');
  document.getElementById("stepsList").innerHTML = recipe.steps.map(step => `<li>${step}</li>`).join('');
  document.querySelector(".recipe-details").style.display = "block";
  document.querySelector(".recipe-list").style.display = "none";
}

function closeRecipe() {
  document.querySelector(".recipe-details").style.display = "none";
  document.querySelector(".recipe-list").style.display = "flex";
}
