const API_KEY = 'AIzaSyACvbGtNeOvZz5rcLi_hNtSLuSKgeLSrgs';

export interface DietGenerationRequest {
  patientInfo: {
    age: number;
    gender: string;
    weight: number;
    height: number;
    constitution: string;
    medicalHistory: string;
    dietaryHabits: string;
  };
  preferences: {
    cuisine: string[];
    restrictions: string[];
    mealCount: number;
  };
  duration: number; // days
}

export interface GeneratedMeal {
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  time: string;
  foods: string[];
  instructions: string;
  ayurvedicNotes: string;
  nutritionalInfo: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
  };
}

export interface DietGenerationResponse {
  success: boolean;
  data?: {
    title: string;
    description: string;
    meals: GeneratedMeal[];
    ayurvedicGuidelines: string[];
    nutritionalSummary: {
      dailyCalories: number;
      dailyProtein: number;
      dailyCarbs: number;
      dailyFat: number;
      dailyFiber: number;
    };
  };
  error?: string;
}

export interface RecipeAnalysisResponse {
  success: boolean;
  data?: {
    totalCalories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
    ayurvedicProperties: {
      dominantRasa: string[];
      virya: string;
      effect: string;
    };
  };
  error?: string;
}

// Mock API function for diet generation
export const generateDietChart = async (request: DietGenerationRequest): Promise<DietGenerationResponse> => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock response based on patient constitution
    const { constitution, age, gender, weight } = request.patientInfo;
    
    const mockMeals: GeneratedMeal[] = [
      {
        type: 'breakfast',
        time: '7:00 AM',
        foods: constitution === 'vata' 
          ? ['Warm oatmeal with almonds', 'Herbal tea with ginger', 'Stewed fruits']
          : constitution === 'pitta'
          ? ['Cool rice porridge', 'Coconut water', 'Sweet fruits like apple']
          : ['Light quinoa porridge', 'Warm water with lemon', 'Bitter greens juice'],
        instructions: `Start your day with warm, nourishing foods suitable for ${constitution} constitution.`,
        ayurvedicNotes: `This meal balances ${constitution} dosha and provides sustained energy.`,
        nutritionalInfo: {
          calories: 350,
          protein: 12,
          carbs: 45,
          fat: 15,
          fiber: 8
        }
      },
      {
        type: 'lunch',
        time: '12:30 PM',
        foods: constitution === 'vata'
          ? ['Moong dal with ghee', 'Basmati rice', 'Steamed vegetables', 'Buttermilk']
          : constitution === 'pitta'
          ? ['Cooling cucumber salad', 'Coconut rice', 'Mint chutney', 'Sweet lassi']
          : ['Barley soup', 'Mixed vegetable curry', 'Brown rice', 'Ginger tea'],
        instructions: `Main meal of the day with balanced nutrition for ${constitution} type.`,
        ayurvedicNotes: `Lunch should be the largest meal, eaten when digestive fire is strongest.`,
        nutritionalInfo: {
          calories: 550,
          protein: 20,
          carbs: 65,
          fat: 18,
          fiber: 12
        }
      },
      {
        type: 'dinner',
        time: '7:00 PM',
        foods: constitution === 'vata'
          ? ['Light soup with vegetables', 'Chapati with ghee', 'Warm milk with turmeric']
          : constitution === 'pitta'
          ? ['Cool salad', 'Rice with cooling herbs', 'Fennel tea']
          : ['Vegetable broth', 'Steamed vegetables', 'Herbal tea'],
        instructions: `Light dinner to aid digestion and promote restful sleep.`,
        ayurvedicNotes: `Evening meal should be lighter and eaten 3 hours before sleep.`,
        nutritionalInfo: {
          calories: 300,
          protein: 10,
          carbs: 35,
          fat: 12,
          fiber: 6
        }
      }
    ];

    return {
      success: true,
      data: {
        title: `Personalized Ayurvedic Diet Plan - ${constitution.charAt(0).toUpperCase() + constitution.slice(1)} Constitution`,
        description: `A balanced diet plan designed for ${gender}, age ${age}, with ${constitution} constitution. This plan focuses on balancing your dominant dosha while providing optimal nutrition.`,
        meals: mockMeals,
        ayurvedicGuidelines: [
          `Eat according to your ${constitution} constitution`,
          'Maintain regular meal times',
          'Eat in a calm, peaceful environment',
          'Chew food thoroughly',
          'Drink warm water throughout the day',
          'Avoid incompatible food combinations',
          'Include all six tastes in your daily diet'
        ],
        nutritionalSummary: {
          dailyCalories: 1200,
          dailyProtein: 42,
          dailyCarbs: 145,
          dailyFat: 45,
          dailyFiber: 26
        }
      }
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to generate diet chart. Please try again.'
    };
  }
};

// Function to get nutritional analysis for custom recipes
export const analyzeRecipe = async (ingredients: string[]): Promise<RecipeAnalysisResponse> => {
  try {
    // Mock nutritional analysis
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      success: true,
      data: {
        totalCalories: 450,
        protein: 15,
        carbs: 55,
        fat: 18,
        fiber: 8,
        ayurvedicProperties: {
          dominantRasa: ['sweet', 'salty'],
          virya: 'neutral',
          effect: 'balancing for all doshas'
        }
      }
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to analyze recipe'
    };
  }
};