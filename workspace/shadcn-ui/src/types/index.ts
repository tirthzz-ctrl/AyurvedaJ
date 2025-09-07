export interface User {
  id: string;
  email: string;
  name: string;
  role: 'doctor' | 'patient';
  createdAt: string;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  weight: number;
  height: number;
  medicalHistory: string;
  dietaryHabits: string;
  mealFrequency: number;
  bowelMovements: string;
  waterIntake: number;
  constitution: 'vata' | 'pitta' | 'kapha' | 'mixed';
  doctorId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Food {
  id: string;
  name: string;
  category: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  ayurvedicProperties: {
    rasa: string[]; // Six tastes
    virya: 'hot' | 'cold'; // Heating/Cooling
    vipaka: string; // Post-digestive effect
    guna: string[]; // Qualities
    dosha: string[]; // Effect on doshas
  };
  cuisine: string;
  difficulty: 'easy' | 'moderate' | 'difficult';
}

export interface DietChart {
  id: string;
  patientId: string;
  doctorId: string;
  title: string;
  description: string;
  meals: Meal[];
  duration: number; // days
  createdAt: string;
  updatedAt: string;
}

export interface Meal {
  id: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  time: string;
  foods: Food[];
  instructions: string;
  ayurvedicNotes: string;
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
}