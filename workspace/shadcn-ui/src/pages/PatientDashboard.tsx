import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from '../lib/translations';
import Navbar from '../components/Navbar';
import { DietChart } from '../types';
import { FileText, Download, Heart, TrendingUp, Calendar, Clock, CheckCircle, Circle } from 'lucide-react';

const PatientDashboard: React.FC = () => {
  const { user } = useAuth();
  const [language, setLanguage] = useState('en');
  const { t } = useTranslation(language);
  const [dietCharts, setDietCharts] = useState<DietChart[]>([]);
  const [healthMetrics, setHealthMetrics] = useState({
    weight: 65,
    waterIntake: 2.2,
    exerciseMinutes: 30,
    sleepHours: 7.5
  });

  useEffect(() => {
    // Load mock diet charts
    const mockDietCharts: DietChart[] = [
      {
        id: '1',
        patientId: user?.id || '',
        doctorId: 'doc1',
        title: 'Vata Balancing Diet Plan',
        description: 'A 7-day diet plan to balance Vata dosha and improve digestion',
        meals: [],
        duration: 7,
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: '2',
        patientId: user?.id || '',
        doctorId: 'doc1',
        title: 'Weight Management Plan',
        description: 'Customized meal plan for healthy weight management',
        meals: [],
        duration: 14,
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date().toISOString()
      }
    ];
    setDietCharts(mockDietCharts);
  }, [user]);

  const todaysMeals = [
    {
      type: 'Breakfast',
      time: '7:00 AM',
      foods: ['Warm oatmeal with almonds', 'Herbal tea with ginger'],
      completed: true
    },
    {
      type: 'Lunch',
      time: '12:30 PM',
      foods: ['Moong dal with ghee', 'Basmati rice', 'Steamed vegetables'],
      completed: true
    },
    {
      type: 'Snack',
      time: '4:00 PM',
      foods: ['Fresh fruits', 'Herbal tea'],
      completed: false
    },
    {
      type: 'Dinner',
      time: '7:00 PM',
      foods: ['Light soup', 'Chapati with ghee', 'Warm milk with turmeric'],
      completed: false
    }
  ];

  const handleDownloadDiet = (dietId: string) => {
    const diet = dietCharts.find(d => d.id === dietId);
    if (diet) {
      const content = `
Ayurvedic Diet Plan: ${diet.title}

Description: ${diet.description}
Duration: ${diet.duration} days
Created: ${new Date(diet.createdAt).toLocaleDateString()}

This is a sample diet chart. In a real application, this would be a properly formatted PDF with detailed meal plans, nutritional information, and Ayurvedic guidelines.

For full functionality, please contact your Ayurvedic practitioner.
      `;
      
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${diet.title.replace(/\s+/g, '_')}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {t('welcome')}, {user?.name}
          </h1>
          <p className="text-gray-600 mt-2">
            Track your Ayurvedic diet journey and wellness progress
          </p>
        </div>

        {/* Health Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Weight</p>
                  <p className="text-2xl font-bold text-gray-900">{healthMetrics.weight} kg</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Water Intake</p>
                  <p className="text-2xl font-bold text-gray-900">{healthMetrics.waterIntake}L</p>
                </div>
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="h-4 w-4 bg-blue-600 rounded-full"></div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Exercise</p>
                  <p className="text-2xl font-bold text-gray-900">{healthMetrics.exerciseMinutes} min</p>
                </div>
                <Heart className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Sleep</p>
                  <p className="text-2xl font-bold text-gray-900">{healthMetrics.sleepHours}h</p>
                </div>
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="today" className="space-y-6">
          <TabsList>
            <TabsTrigger value="today">Today's Plan</TabsTrigger>
            <TabsTrigger value="diet-charts">{t('myDietCharts')}</TabsTrigger>
            <TabsTrigger value="progress">Progress Tracking</TabsTrigger>
            <TabsTrigger value="ayurveda">Ayurvedic Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="today" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Today's Meal Plan
                </CardTitle>
                <CardDescription>
                  Follow your personalized Ayurvedic meal schedule
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todaysMeals.map((meal, index) => (
                    <div key={index} className={`p-4 border rounded-lg ${meal.completed ? 'bg-green-50 border-green-200' : 'bg-white'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {meal.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : (
                            <Circle className="h-5 w-5 text-gray-400" />
                          )}
                          <div>
                            <h3 className="font-medium">{meal.type}</h3>
                            <p className="text-sm text-gray-600">{meal.time}</p>
                          </div>
                        </div>
                        <Badge variant={meal.completed ? "default" : "secondary"}>
                          {meal.completed ? "Completed" : "Pending"}
                        </Badge>
                      </div>
                      <ul className="text-sm text-gray-600 ml-8">
                        {meal.foods.map((food, idx) => (
                          <li key={idx}>• {food}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="diet-charts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('myDietCharts')}</CardTitle>
                <CardDescription>
                  Your personalized Ayurvedic diet plans from your doctor
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dietCharts.map((chart) => (
                    <div key={chart.id} className="p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <FileText className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">{chart.title}</h3>
                            <p className="text-sm text-gray-600">{chart.description}</p>
                            <p className="text-xs text-gray-500 mt-1">
                              Created: {new Date(chart.createdAt).toLocaleDateString()} • Duration: {chart.duration} days
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button 
                            size="sm" 
                            className="gap-2"
                            onClick={() => handleDownloadDiet(chart.id)}
                          >
                            <Download className="h-4 w-4" />
                            {t('downloadDiet')}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Diet Adherence</span>
                        <span className="text-sm">85%</span>
                      </div>
                      <Progress value={85} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Water Intake Goal</span>
                        <span className="text-sm">92%</span>
                      </div>
                      <Progress value={92} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Exercise Goal</span>
                        <span className="text-sm">70%</span>
                      </div>
                      <Progress value={70} />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Health Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Health trend charts will be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ayurveda" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Daily Ayurvedic Tips</CardTitle>
                <CardDescription>
                  Personalized recommendations based on your constitution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Morning Routine</h4>
                    <p className="text-blue-800 text-sm">Start your day with warm water and lemon to stimulate digestion and balance your Vata dosha.</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">Meal Timing</h4>
                    <p className="text-green-800 text-sm">Eat your largest meal at lunch when your digestive fire (Agni) is strongest, typically between 12-2 PM.</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-medium text-purple-900 mb-2">Evening Practice</h4>
                    <p className="text-purple-800 text-sm">Practice gentle yoga or meditation before dinner to calm your mind and prepare for restful sleep.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* JotForm Chatbot Integration */}
      <div id="jotform-chatbot">
        <script 
          src="https://cdn.jotfor.ms/s/umd/latest/for-chatbot.js"
          data-jf-chatbot-id="019918f3c42c79b69bdbff676e0cda51d706"
          data-jf-chatbot-position="bottom-right"
          data-jf-chatbot-theme="light"
        ></script>
      </div>
    </div>
  );
};

export default PatientDashboard;