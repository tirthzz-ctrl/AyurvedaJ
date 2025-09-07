import { Food } from '../types';

export const foodDatabase: Food[] = [
  // Grains
  {
    id: '1',
    name: 'Basmati Rice',
    category: 'Grains',
    calories: 130,
    protein: 2.7,
    carbs: 28,
    fat: 0.3,
    fiber: 0.4,
    ayurvedicProperties: {
      rasa: ['sweet'],
      virya: 'cold',
      vipaka: 'sweet',
      guna: ['light', 'soft'],
      dosha: ['balances pitta', 'increases kapha']
    },
    cuisine: 'Indian',
    difficulty: 'easy'
  },
  {
    id: '2',
    name: 'Quinoa',
    category: 'Grains',
    calories: 120,
    protein: 4.4,
    carbs: 22,
    fat: 1.9,
    fiber: 2.8,
    ayurvedicProperties: {
      rasa: ['sweet', 'astringent'],
      virya: 'hot',
      vipaka: 'pungent',
      guna: ['light', 'dry'],
      dosha: ['balances kapha', 'increases vata']
    },
    cuisine: 'International',
    difficulty: 'easy'
  },
  // Vegetables
  {
    id: '3',
    name: 'Spinach (Palak)',
    category: 'Vegetables',
    calories: 23,
    protein: 2.9,
    carbs: 3.6,
    fat: 0.4,
    fiber: 2.2,
    ayurvedicProperties: {
      rasa: ['sweet', 'bitter', 'astringent'],
      virya: 'cold',
      vipaka: 'pungent',
      guna: ['light', 'dry'],
      dosha: ['balances pitta', 'increases vata']
    },
    cuisine: 'Indian',
    difficulty: 'easy'
  },
  {
    id: '4',
    name: 'Sweet Potato',
    category: 'Vegetables',
    calories: 86,
    protein: 1.6,
    carbs: 20,
    fat: 0.1,
    fiber: 3,
    ayurvedicProperties: {
      rasa: ['sweet'],
      virya: 'hot',
      vipaka: 'sweet',
      guna: ['heavy', 'oily'],
      dosha: ['balances vata', 'increases kapha']
    },
    cuisine: 'International',
    difficulty: 'easy'
  },
  // Proteins
  {
    id: '5',
    name: 'Moong Dal (Green Lentils)',
    category: 'Legumes',
    calories: 105,
    protein: 7.0,
    carbs: 19,
    fat: 0.4,
    fiber: 7.6,
    ayurvedicProperties: {
      rasa: ['sweet', 'astringent'],
      virya: 'cold',
      vipaka: 'sweet',
      guna: ['light', 'dry'],
      dosha: ['tridoshic - balances all']
    },
    cuisine: 'Indian',
    difficulty: 'easy'
  },
  {
    id: '6',
    name: 'Almonds',
    category: 'Nuts',
    calories: 161,
    protein: 6.0,
    carbs: 6.1,
    fat: 14,
    fiber: 3.5,
    ayurvedicProperties: {
      rasa: ['sweet'],
      virya: 'hot',
      vipaka: 'sweet',
      guna: ['heavy', 'oily'],
      dosha: ['balances vata', 'increases pitta and kapha']
    },
    cuisine: 'International',
    difficulty: 'easy'
  },
  // Spices
  {
    id: '7',
    name: 'Turmeric (Haldi)',
    category: 'Spices',
    calories: 29,
    protein: 0.9,
    carbs: 6.3,
    fat: 0.3,
    fiber: 2.1,
    ayurvedicProperties: {
      rasa: ['bitter', 'pungent'],
      virya: 'hot',
      vipaka: 'pungent',
      guna: ['light', 'dry'],
      dosha: ['tridoshic - balances all']
    },
    cuisine: 'Indian',
    difficulty: 'easy'
  },
  {
    id: '8',
    name: 'Ginger (Adrak)',
    category: 'Spices',
    calories: 4,
    protein: 0.1,
    carbs: 0.9,
    fat: 0.0,
    fiber: 0.1,
    ayurvedicProperties: {
      rasa: ['pungent'],
      virya: 'hot',
      vipaka: 'sweet',
      guna: ['light', 'oily'],
      dosha: ['balances vata and kapha', 'increases pitta']
    },
    cuisine: 'Indian',
    difficulty: 'easy'
  },
  // Fruits
  {
    id: '9',
    name: 'Apple',
    category: 'Fruits',
    calories: 52,
    protein: 0.3,
    carbs: 14,
    fat: 0.2,
    fiber: 2.4,
    ayurvedicProperties: {
      rasa: ['sweet', 'astringent'],
      virya: 'cold',
      vipaka: 'sweet',
      guna: ['heavy', 'rough'],
      dosha: ['balances pitta', 'increases vata and kapha']
    },
    cuisine: 'International',
    difficulty: 'easy'
  },
  {
    id: '10',
    name: 'Mango',
    category: 'Fruits',
    calories: 60,
    protein: 0.8,
    carbs: 15,
    fat: 0.4,
    fiber: 1.6,
    ayurvedicProperties: {
      rasa: ['sweet', 'sour'],
      virya: 'hot',
      vipaka: 'sweet',
      guna: ['heavy', 'oily'],
      dosha: ['balances vata', 'increases pitta and kapha']
    },
    cuisine: 'Indian',
    difficulty: 'easy'
  }
];

export const searchFoods = (query: string, category?: string): Food[] => {
  let filtered = foodDatabase;
  
  if (category && category !== 'all') {
    filtered = filtered.filter(food => food.category.toLowerCase() === category.toLowerCase());
  }
  
  if (query) {
    filtered = filtered.filter(food => 
      food.name.toLowerCase().includes(query.toLowerCase()) ||
      food.category.toLowerCase().includes(query.toLowerCase()) ||
      food.cuisine.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  return filtered;
};

export const getFoodById = (id: string): Food | undefined => {
  return foodDatabase.find(food => food.id === id);
};

export const getFoodCategories = (): string[] => {
  const categories = [...new Set(foodDatabase.map(food => food.category))];
  return categories.sort();
};